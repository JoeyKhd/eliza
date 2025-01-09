import { Plugin } from "@elizaos/core/src/types";
// import { executeCreateToken } from "./actions/createToken";
import { executeSwap } from "./actions/swap";
import { executeTransfer } from "./actions/transfer";
import { walletProvider } from "./providers/wallet";

export const nearPlugin: Plugin = {
    name: "NEAR",
    description: "Near Protocol Plugin for Eliza",
    providers: [walletProvider],
    actions: [executeSwap, executeTransfer],
    evaluators: [],
};

export default nearPlugin;
