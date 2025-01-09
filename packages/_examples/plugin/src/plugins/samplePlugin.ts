import { Plugin } from "@elizaos/core";
import { createResourceAction } from "../actions/sampleAction";
import { sampleEvaluator } from "../evaluators/sampleEvalutor";
import { sampleProvider } from "../providers/sampleProvider";

export const samplePlugin: Plugin = {
    name: "sample",
    description: "Enables creation and management of generic resources",
    actions: [createResourceAction],
    providers: [sampleProvider],
    evaluators: [sampleEvaluator],
    // separate examples will be added for services and clients
    services: [],
    clients: [],
};
