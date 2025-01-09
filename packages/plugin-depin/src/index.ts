import type { Plugin } from "@elizaos/core";

import { depinProjects } from "./actions/depinProjects";
import { sentientAI } from "./actions/sentientai";
import { depinDataProvider } from "./providers/depinData";

export const depinPlugin: Plugin = {
    name: "depin",
    description: "DePIN plugin for Sentient AI",
    providers: [depinDataProvider],
    evaluators: [],
    services: [],
    actions: [sentientAI, depinProjects],
};

export default depinPlugin;
