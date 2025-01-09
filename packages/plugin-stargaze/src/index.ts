import { Plugin } from "@elizaos/core";
import getCollectionStats from "./actions/getCollectionStats";
import getLatestNFT from "./actions/getLatestNFT";
import getTokenSales from "./actions/getTokenSales";

export const stargazePlugin: Plugin = {
    name: "stargaze",
    description: "Stargaze NFT Plugin for Eliza",
    actions: [getLatestNFT, getCollectionStats, getTokenSales],
    evaluators: [],
    providers: [],
};

export default stargazePlugin;
