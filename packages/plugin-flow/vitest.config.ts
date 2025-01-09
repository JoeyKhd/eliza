import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        testTimeout: 120000,
    },
    assetsInclude: ["**/*.cdc"],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
