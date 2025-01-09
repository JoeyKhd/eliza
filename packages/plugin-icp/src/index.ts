import { Plugin } from "@elizaos/core";
import { executeCreateToken } from "./actions/createToken";
import { icpWalletProvider } from "./providers/wallet";

export const icpPlugin: Plugin = {
    name: "icp",
    description: "Internet Computer Protocol Plugin for Eliza",
    providers: [icpWalletProvider],
    actions: [executeCreateToken],
    evaluators: [],
};

export default icpPlugin;
