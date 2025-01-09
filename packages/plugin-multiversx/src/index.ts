import { Plugin } from "@elizaos/core";
import createToken from "./actions/createToken";
import transfer from "./actions/transfer";

export const multiversxPlugin: Plugin = {
    name: "multiversx",
    description: "MultiversX Plugin for Eliza",
    actions: [transfer, createToken],
    evaluators: [],
    providers: [],
};

export default multiversxPlugin;
