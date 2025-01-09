[@elizaos/core v0.1.7](../index.md) / Evaluator

# Interface: Evaluator

Evaluator for assessing agent responses

## Properties

### alwaysRun?

> `optional` **alwaysRun**: `boolean`

Whether to always run

#### Defined in

[packages/core/src/types.ts:465](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L465)

***

### description

> **description**: `string`

Detailed description

#### Defined in

[packages/core/src/types.ts:468](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L468)

***

### similes

> **similes**: `string`[]

Similar evaluator descriptions

#### Defined in

[packages/core/src/types.ts:471](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L471)

***

### examples

> **examples**: [`EvaluationExample`](EvaluationExample.md)[]

Example evaluations

#### Defined in

[packages/core/src/types.ts:474](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L474)

***

### handler

> **handler**: [`Handler`](../type-aliases/Handler.md)

Handler function

#### Defined in

[packages/core/src/types.ts:477](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L477)

***

### name

> **name**: `string`

Evaluator name

#### Defined in

[packages/core/src/types.ts:480](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L480)

***

### validate

> **validate**: [`Validator`](../type-aliases/Validator.md)

Validation function

#### Defined in

[packages/core/src/types.ts:483](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L483)
