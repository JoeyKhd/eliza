import {
    type Content,
    type IAgentRuntime,
    type Memory,
    type UUID,
    elizaLogger,
} from "@elizaos/core";
import { AnyPublicationFragment } from "@lens-protocol/client";
import { textOnly } from "@lens-protocol/metadata";
import type { LensClient } from "./client";
import { createPublicationMemory } from "./memory";
import StorjProvider from "./providers/StorjProvider";

export async function sendPublication({
    client,
    runtime,
    content,
    roomId,
    commentOn,
    ipfs,
}: {
    client: LensClient;
    runtime: IAgentRuntime;
    content: Content;
    roomId: UUID;
    commentOn?: string;
    ipfs: StorjProvider;
}): Promise<{ memory?: Memory; publication?: AnyPublicationFragment }> {
    // TODO: arweave provider for content hosting
    const metadata = textOnly({ content: content.text });
    const contentURI = await ipfs.pinJson(metadata);

    const publication = await client.createPublication(
        contentURI,
        false, // TODO: support collectable settings
        commentOn
    );

    if (publication) {
        return {
            publication,
            memory: createPublicationMemory({
                roomId,
                runtime,
                publication: publication as AnyPublicationFragment,
            }),
        };
    }

    return {};
}
