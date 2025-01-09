import { Plugin } from "@elizaos/core";
import { deployContractAction } from "./actions/deployContract";
import { getContractSchemaAction } from "./actions/getContractSchema";
import { getCurrentNonceAction } from "./actions/getCurrentNonce";
import { getTransactionAction } from "./actions/getTransaction";
import { readContractAction } from "./actions/readContract";
import { waitForTransactionReceiptAction } from "./actions/waitForTransactionReceipt";
import { writeContractAction } from "./actions/writeContract";
import { clientProvider } from "./providers/client";

export const genLayerPlugin: Plugin = {
    name: "genlayer",
    description: "Plugin for interacting with GenLayer protocol",
    actions: [
        readContractAction,
        writeContractAction,
        deployContractAction,
        getTransactionAction,
        getCurrentNonceAction,
        waitForTransactionReceiptAction,
        getContractSchemaAction,
    ],
    evaluators: [],
    providers: [clientProvider],
};

export default genLayerPlugin;
