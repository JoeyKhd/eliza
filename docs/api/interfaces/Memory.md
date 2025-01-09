[@elizaos/core v0.1.7](../index.md) / Memory

# Interface: Memory

Represents a stored memory/message

## Properties

### id?

> `optional` **id**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Optional unique identifier

#### Defined in

[packages/core/src/types.ts:354](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L354)

***

### userId

> **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Associated user ID

#### Defined in

[packages/core/src/types.ts:357](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L357)

***

### agentId

> **agentId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Associated agent ID

#### Defined in

[packages/core/src/types.ts:360](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L360)

***

### createdAt?

> `optional` **createdAt**: `number`

Optional creation timestamp

#### Defined in

[packages/core/src/types.ts:363](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L363)

***

### content

> **content**: [`Content`](Content.md)

Memory content

#### Defined in

[packages/core/src/types.ts:366](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L366)

***

### embedding?

> `optional` **embedding**: `number`[]

Optional embedding vector

#### Defined in

[packages/core/src/types.ts:369](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L369)

***

### roomId

> **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Associated room ID

#### Defined in

[packages/core/src/types.ts:372](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L372)

***

### unique?

> `optional` **unique**: `boolean`

Whether memory is unique

#### Defined in

[packages/core/src/types.ts:375](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L375)

***

### similarity?

> `optional` **similarity**: `number`

Embedding similarity score

#### Defined in

[packages/core/src/types.ts:378](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L378)
