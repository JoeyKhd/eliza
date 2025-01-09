[@elizaos/core v0.1.7](../index.md) / RAGKnowledgeItem

# Interface: RAGKnowledgeItem

## Properties

### id

> **id**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Defined in

[packages/core/src/types.ts:1383](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1383)

***

### agentId

> **agentId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Defined in

[packages/core/src/types.ts:1384](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1384)

***

### content

> **content**: `object`

#### text

> **text**: `string`

#### metadata?

> `optional` **metadata**: `object`

##### Index Signature

 \[`key`: `string`\]: `unknown`

#### metadata.isMain?

> `optional` **isMain**: `boolean`

#### metadata.isChunk?

> `optional` **isChunk**: `boolean`

#### metadata.originalId?

> `optional` **originalId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### metadata.chunkIndex?

> `optional` **chunkIndex**: `number`

#### metadata.source?

> `optional` **source**: `string`

#### metadata.type?

> `optional` **type**: `string`

#### metadata.isShared?

> `optional` **isShared**: `boolean`

#### Defined in

[packages/core/src/types.ts:1385](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1385)

***

### embedding?

> `optional` **embedding**: `Float32Array`

#### Defined in

[packages/core/src/types.ts:1398](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1398)

***

### createdAt?

> `optional` **createdAt**: `number`

#### Defined in

[packages/core/src/types.ts:1399](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1399)

***

### similarity?

> `optional` **similarity**: `number`

#### Defined in

[packages/core/src/types.ts:1400](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1400)

***

### score?

> `optional` **score**: `number`

#### Defined in

[packages/core/src/types.ts:1401](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1401)
