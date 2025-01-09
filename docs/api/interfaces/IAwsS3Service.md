[@elizaos/core v0.1.7](../index.md) / IAwsS3Service

# Interface: IAwsS3Service

## Extends

- [`Service`](../classes/Service.md)

## Accessors

### serviceType

#### Get Signature

> **get** **serviceType**(): [`ServiceType`](../enumerations/ServiceType.md)

##### Returns

[`ServiceType`](../enumerations/ServiceType.md)

#### Inherited from

[`Service`](../classes/Service.md).[`serviceType`](../classes/Service.md#serviceType-1)

#### Defined in

[packages/core/src/types.ts:1158](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1158)

## Methods

### initialize()

> `abstract` **initialize**(`runtime`): `Promise`\<`void`\>

Add abstract initialize method that must be implemented by derived classes

#### Parameters

• **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Service`](../classes/Service.md).[`initialize`](../classes/Service.md#initialize)

#### Defined in

[packages/core/src/types.ts:1163](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1163)

***

### uploadFile()

> **uploadFile**(`imagePath`, `subDirectory`, `useSignedUrl`, `expiresIn`): `Promise`\<`object`\>

#### Parameters

• **imagePath**: `string`

• **subDirectory**: `string`

• **useSignedUrl**: `boolean`

• **expiresIn**: `number`

#### Returns

`Promise`\<`object`\>

##### success

> **success**: `boolean`

##### url?

> `optional` **url**: `string`

##### error?

> `optional` **error**: `string`

#### Defined in

[packages/core/src/types.ts:1321](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1321)

***

### generateSignedUrl()

> **generateSignedUrl**(`fileName`, `expiresIn`): `Promise`\<`string`\>

#### Parameters

• **fileName**: `string`

• **expiresIn**: `number`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/core/src/types.ts:1331](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1331)
