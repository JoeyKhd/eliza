import { Plugin } from "@elizaos/core";
import { bridgeTransfer } from "./actions/bridgeTransfer";
import { confiPump } from "./actions/confiPump";
import { transfer } from "./actions/transfer";

export const confluxPlugin: Plugin = {
    name: "conflux",
    description: "Conflux Plugin for Eliza",
    actions: [transfer, bridgeTransfer, confiPump],
    providers: [],
};
