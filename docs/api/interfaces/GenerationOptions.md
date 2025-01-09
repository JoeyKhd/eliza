[@elizaos/core v0.1.7](../index.md) / GenerationOptions

# Interface: GenerationOptions

Configuration options for generating objects with a model.

## Properties

### runtime

> **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

#### Defined in

[packages/core/src/generation.ts:1572](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1572)

***

### context

> **context**: `string`

#### Defined in

[packages/core/src/generation.ts:1573](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1573)

***

### modelClass

> **modelClass**: [`ModelClass`](../enumerations/ModelClass.md)

#### Defined in

[packages/core/src/generation.ts:1574](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1574)

***

### schema?

> `optional` **schema**: `ZodType`\<`any`, `ZodTypeDef`, `any`\>

#### Defined in

[packages/core/src/generation.ts:1575](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1575)

***

### schemaName?

> `optional` **schemaName**: `string`

#### Defined in

[packages/core/src/generation.ts:1576](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1576)

***

### schemaDescription?

> `optional` **schemaDescription**: `string`

#### Defined in

[packages/core/src/generation.ts:1577](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1577)

***

### stop?

> `optional` **stop**: `string`[]

#### Defined in

[packages/core/src/generation.ts:1578](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1578)

***

### mode?

> `optional` **mode**: `"auto"` \| `"json"` \| `"tool"`

#### Defined in

[packages/core/src/generation.ts:1579](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1579)

***

### experimental\_providerMetadata?

> `optional` **experimental\_providerMetadata**: `Record`\<`string`, `unknown`\>

#### Defined in

[packages/core/src/generation.ts:1580](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1580)

***

### verifiableInference?

> `optional` **verifiableInference**: `boolean`

#### Defined in

[packages/core/src/generation.ts:1581](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1581)

***

### verifiableInferenceAdapter?

> `optional` **verifiableInferenceAdapter**: [`IVerifiableInferenceAdapter`](IVerifiableInferenceAdapter.md)

#### Defined in

[packages/core/src/generation.ts:1582](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1582)

***

### verifiableInferenceOptions?

> `optional` **verifiableInferenceOptions**: [`VerifiableInferenceOptions`](VerifiableInferenceOptions.md)

#### Defined in

[packages/core/src/generation.ts:1583](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/generation.ts#L1583)
