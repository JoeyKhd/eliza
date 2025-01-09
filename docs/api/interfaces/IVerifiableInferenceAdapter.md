[@elizaos/core v0.1.7](../index.md) / IVerifiableInferenceAdapter

# Interface: IVerifiableInferenceAdapter

Interface for verifiable inference adapters

## Properties

### options

> **options**: `any`

#### Defined in

[packages/core/src/types.ts:1454](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1454)

## Methods

### generateText()

> **generateText**(`context`, `modelClass`, `options`?): `Promise`\<[`VerifiableInferenceResult`](VerifiableInferenceResult.md)\>

Generate text with verifiable proof

#### Parameters

• **context**: `string`

The input text/prompt

• **modelClass**: `string`

The model class/name to use

• **options?**: [`VerifiableInferenceOptions`](VerifiableInferenceOptions.md)

Additional provider-specific options

#### Returns

`Promise`\<[`VerifiableInferenceResult`](VerifiableInferenceResult.md)\>

Promise containing the generated text and proof data

#### Defined in

[packages/core/src/types.ts:1462](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1462)

***

### verifyProof()

> **verifyProof**(`result`): `Promise`\<`boolean`\>

Verify the proof of a generated response

#### Parameters

• **result**: [`VerifiableInferenceResult`](VerifiableInferenceResult.md)

The result containing response and proof to verify

#### Returns

`Promise`\<`boolean`\>

Promise indicating if the proof is valid

#### Defined in

[packages/core/src/types.ts:1473](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1473)
