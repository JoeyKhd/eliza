import crypto from "crypto";
import {
    IAgentRuntime,
    Memory,
    Provider,
    State,
    elizaLogger,
} from "@elizaos/core";
import { DeriveKeyResponse, TappdClient } from "@phala/dstack-sdk";
import { Keypair } from "@solana/web3.js";
import { PrivateKeyAccount, keccak256 } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { RemoteAttestationQuote, TEEMode } from "../types/tee";
import { RemoteAttestationProvider } from "./remoteAttestationProvider";

interface DeriveKeyAttestationData {
    agentId: string;
    publicKey: string;
}

class DeriveKeyProvider {
    private client: TappdClient;
    private raProvider: RemoteAttestationProvider;

    constructor(teeMode?: string) {
        let endpoint: string | undefined;

        // Both LOCAL and DOCKER modes use the simulator, just with different endpoints
        switch (teeMode) {
            case TEEMode.LOCAL:
                endpoint = "http://localhost:8090";
                elizaLogger.log(
                    "TEE: Connecting to local simulator at localhost:8090"
                );
                break;
            case TEEMode.DOCKER:
                endpoint = "http://host.docker.internal:8090";
                elizaLogger.log(
                    "TEE: Connecting to simulator via Docker at host.docker.internal:8090"
                );
                break;
            case TEEMode.PRODUCTION:
                endpoint = undefined;
                elizaLogger.log(
                    "TEE: Running in production mode without simulator"
                );
                break;
            default:
                throw new Error(
                    `Invalid TEE_MODE: ${teeMode}. Must be one of: LOCAL, DOCKER, PRODUCTION`
                );
        }

        this.client = endpoint ? new TappdClient(endpoint) : new TappdClient();
        this.raProvider = new RemoteAttestationProvider(teeMode);
    }

    private async generateDeriveKeyAttestation(
        agentId: string,
        publicKey: string
    ): Promise<RemoteAttestationQuote> {
        const deriveKeyData: DeriveKeyAttestationData = {
            agentId,
            publicKey,
        };
        const reportdata = JSON.stringify(deriveKeyData);
        elizaLogger.log(
            "Generating Remote Attestation Quote for Derive Key..."
        );
        const quote = await this.raProvider.generateAttestation(reportdata);
        elizaLogger.log("Remote Attestation Quote generated successfully!");
        return quote;
    }

    async rawDeriveKey(
        path: string,
        subject: string
    ): Promise<DeriveKeyResponse> {
        try {
            if (!path || !subject) {
                elizaLogger.error(
                    "Path and Subject are required for key derivation"
                );
            }

            elizaLogger.log("Deriving Raw Key in TEE...");
            const derivedKey = await this.client.deriveKey(path, subject);

            elizaLogger.log("Raw Key Derived Successfully!");
            return derivedKey;
        } catch (error) {
            elizaLogger.error("Error deriving raw key:", error);
            throw error;
        }
    }

    async deriveEd25519Keypair(
        path: string,
        subject: string,
        agentId: string
    ): Promise<{ keypair: Keypair; attestation: RemoteAttestationQuote }> {
        try {
            if (!path || !subject) {
                elizaLogger.error(
                    "Path and Subject are required for key derivation"
                );
            }

            elizaLogger.log("Deriving Key in TEE...");
            const derivedKey = await this.client.deriveKey(path, subject);
            const uint8ArrayDerivedKey = derivedKey.asUint8Array();

            const hash = crypto.createHash("sha256");
            hash.update(uint8ArrayDerivedKey);
            const seed = hash.digest();
            const seedArray = new Uint8Array(seed);
            const keypair = Keypair.fromSeed(seedArray.slice(0, 32));

            // Generate an attestation for the derived key data for public to verify
            const attestation = await this.generateDeriveKeyAttestation(
                agentId,
                keypair.publicKey.toBase58()
            );
            elizaLogger.log("Key Derived Successfully!");

            return { keypair, attestation };
        } catch (error) {
            elizaLogger.error("Error deriving key:", error);
            throw error;
        }
    }

    async deriveEcdsaKeypair(
        path: string,
        subject: string,
        agentId: string
    ): Promise<{
        keypair: PrivateKeyAccount;
        attestation: RemoteAttestationQuote;
    }> {
        try {
            if (!path || !subject) {
                elizaLogger.error(
                    "Path and Subject are required for key derivation"
                );
            }

            elizaLogger.log("Deriving ECDSA Key in TEE...");
            const deriveKeyResponse: DeriveKeyResponse =
                await this.client.deriveKey(path, subject);
            const hex = keccak256(deriveKeyResponse.asUint8Array());
            const keypair: PrivateKeyAccount = privateKeyToAccount(hex);

            // Generate an attestation for the derived key data for public to verify
            const attestation = await this.generateDeriveKeyAttestation(
                agentId,
                keypair.address
            );
            elizaLogger.log("ECDSA Key Derived Successfully!");

            return { keypair, attestation };
        } catch (error) {
            elizaLogger.error("Error deriving ecdsa key:", error);
            throw error;
        }
    }
}

const deriveKeyProvider: Provider = {
    get: async (runtime: IAgentRuntime, _message?: Memory, _state?: State) => {
        const teeMode = runtime.getSetting("TEE_MODE");
        const provider = new DeriveKeyProvider(teeMode);
        const agentId = runtime.agentId;
        try {
            // Validate wallet configuration
            if (!runtime.getSetting("WALLET_SECRET_SALT")) {
                elizaLogger.error(
                    "Wallet secret salt is not configured in settings"
                );
                return "";
            }

            try {
                const secretSalt =
                    runtime.getSetting("WALLET_SECRET_SALT") || "secret_salt";
                const solanaKeypair = await provider.deriveEd25519Keypair(
                    "/",
                    secretSalt,
                    agentId
                );
                const evmKeypair = await provider.deriveEcdsaKeypair(
                    "/",
                    secretSalt,
                    agentId
                );
                return JSON.stringify({
                    solana: solanaKeypair.keypair.publicKey,
                    evm: evmKeypair.keypair.address,
                });
            } catch (error) {
                elizaLogger.error("Error creating PublicKey:", error);
                return "";
            }
        } catch (error) {
            elizaLogger.error("Error in derive key provider:", error.message);
            return `Failed to fetch derive key information: ${error instanceof Error ? error.message : "Unknown error"}`;
        }
    },
};

export { deriveKeyProvider, DeriveKeyProvider };
