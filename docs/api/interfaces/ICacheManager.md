[@elizaos/core v0.1.7](../index.md) / ICacheManager

# Interface: ICacheManager

## Methods

### get()

> **get**\<`T`\>(`key`): `Promise`\<`T`\>

#### Type Parameters

• **T** = `unknown`

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/core/src/types.ts:1139](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1139)

***

### set()

> **set**\<`T`\>(`key`, `value`, `options`?): `Promise`\<`void`\>

#### Type Parameters

• **T**

#### Parameters

• **key**: `string`

• **value**: `T`

• **options?**: [`CacheOptions`](../type-aliases/CacheOptions.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1140](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1140)

***

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1141](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1141)
