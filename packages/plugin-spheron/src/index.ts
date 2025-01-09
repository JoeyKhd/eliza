import { Plugin } from "@elizaos/core";
import deployment from "./actions/deployment.ts";
import escrow from "./actions/escrow.ts";
import { deploymentProvider } from "./providers/deployment.ts";
import { tokensProvider } from "./providers/tokens.ts";
import {
    DEPLOYMENT_CONFIGS,
    LEASE_STATES,
    SUPPORTED_TOKENS,
} from "./utils/constants.ts";

export const CONFIG = {
    SUPPORTED_TOKENS,
    DEPLOYMENT_CONFIGS,
    LEASE_STATES,
};

export const spheronPlugin: Plugin = {
    name: "spheron",
    description: "Spheron Protocol Plugin for Eliza",
    actions: [escrow, deployment],
    evaluators: [],
    providers: [tokensProvider, deploymentProvider],
};

export default spheronPlugin;

// Export types
export * from "./types/index.ts";
export * from "./environment.ts";
export * from "./utils/index.ts";
