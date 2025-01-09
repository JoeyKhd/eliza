import type { AssetList } from "@chain-registry/types";

export const getAvailableAssets = (
    assets: AssetList[],
    customAssets: AssetList[]
) => [
    // biome-ignore lint/correctness/noUnsafeOptionalChaining: ignore for now
    ...assets?.filter(
        (asset) =>
            !(customAssets ?? [])
                ?.map((customAsset) => customAsset.chain_name)
                ?.includes(asset.chain_name)
    ),
    ...(customAssets ?? []),
];
