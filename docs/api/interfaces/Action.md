[@elizaos/core v0.1.7](../index.md) / Action

# Interface: Action

Represents an action the agent can perform

## Properties

### similes

> **similes**: `string`[]

Similar action descriptions

#### Defined in

[packages/core/src/types.ts:425](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L425)

***

### description

> **description**: `string`

Detailed description

#### Defined in

[packages/core/src/types.ts:428](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L428)

***

### examples

> **examples**: [`ActionExample`](ActionExample.md)[][]

Example usages

#### Defined in

[packages/core/src/types.ts:431](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L431)

***

### handler

> **handler**: [`Handler`](../type-aliases/Handler.md)

Handler function

#### Defined in

[packages/core/src/types.ts:434](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L434)

***

### name

> **name**: `string`

Action name

#### Defined in

[packages/core/src/types.ts:437](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L437)

***

### validate

> **validate**: [`Validator`](../type-aliases/Validator.md)

Validation function

#### Defined in

[packages/core/src/types.ts:440](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L440)

***

### suppressInitialMessage?

> `optional` **suppressInitialMessage**: `boolean`

Whether to suppress the initial message when this action is used

#### Defined in

[packages/core/src/types.ts:443](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L443)
