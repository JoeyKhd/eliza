import { Plugin } from "@elizaos/core";
import tokenMillCreate from "./actions/tokenMillCreate";
import transfer from "./actions/transfer";
import yakStrategy from "./actions/yakStrategy";
import yakSwap from "./actions/yakSwap";
import { strategiesProvider } from "./providers/strategies";
import { tokensProvider } from "./providers/tokens";
import { walletProvider } from "./providers/wallet";
import {
    STRATEGY_ADDRESSES,
    TOKEN_ADDRESSES,
    TOKEN_MILL_CONFIG,
    YAK_SWAP_CONFIG,
} from "./utils/constants";

export const PROVIDER_CONFIG = {
    TOKEN_ADDRESSES: TOKEN_ADDRESSES,
    STRATEGY_ADDRESSES: STRATEGY_ADDRESSES,
    YAK_SWAP_CONFIG: YAK_SWAP_CONFIG,
    TOKEN_MILL_CONFIG: TOKEN_MILL_CONFIG,
};

export const avalanchePlugin: Plugin = {
    name: "avalanche",
    description: "Avalanche Plugin for Eliza",
    actions: [transfer, yakSwap, yakStrategy, tokenMillCreate],
    evaluators: [],
    providers: [tokensProvider, strategiesProvider, walletProvider],
};

export default avalanchePlugin;
