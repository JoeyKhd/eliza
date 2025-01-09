[@elizaos/core v0.1.7](../index.md) / IAgentRuntime

# Interface: IAgentRuntime

## Properties

### agentId

> **agentId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Properties

#### Defined in

[packages/core/src/types.ts:1168](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1168)

***

### serverUrl

> **serverUrl**: `string`

#### Defined in

[packages/core/src/types.ts:1169](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1169)

***

### databaseAdapter

> **databaseAdapter**: [`IDatabaseAdapter`](IDatabaseAdapter.md)

#### Defined in

[packages/core/src/types.ts:1170](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1170)

***

### token

> **token**: `string`

#### Defined in

[packages/core/src/types.ts:1171](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1171)

***

### modelProvider

> **modelProvider**: [`ModelProviderName`](../enumerations/ModelProviderName.md)

#### Defined in

[packages/core/src/types.ts:1172](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1172)

***

### imageModelProvider

> **imageModelProvider**: [`ModelProviderName`](../enumerations/ModelProviderName.md)

#### Defined in

[packages/core/src/types.ts:1173](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1173)

***

### imageVisionModelProvider

> **imageVisionModelProvider**: [`ModelProviderName`](../enumerations/ModelProviderName.md)

#### Defined in

[packages/core/src/types.ts:1174](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1174)

***

### character

> **character**: [`Character`](../type-aliases/Character.md)

#### Defined in

[packages/core/src/types.ts:1175](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1175)

***

### providers

> **providers**: [`Provider`](Provider.md)[]

#### Defined in

[packages/core/src/types.ts:1176](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1176)

***

### actions

> **actions**: [`Action`](Action.md)[]

#### Defined in

[packages/core/src/types.ts:1177](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1177)

***

### evaluators

> **evaluators**: [`Evaluator`](Evaluator.md)[]

#### Defined in

[packages/core/src/types.ts:1178](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1178)

***

### plugins

> **plugins**: [`Plugin`](../type-aliases/Plugin.md)[]

#### Defined in

[packages/core/src/types.ts:1179](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1179)

***

### fetch()?

> `optional` **fetch**: (`input`, `init`?) => `Promise`\<`Response`\>(`input`, `init`?) => `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

#### Parameters

• **input**: `RequestInfo` \| `URL`

• **init?**: `RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Parameters

• **input**: `string` \| `Request` \| `URL`

• **init?**: `RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Defined in

[packages/core/src/types.ts:1181](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1181)

***

### messageManager

> **messageManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:1183](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1183)

***

### descriptionManager

> **descriptionManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:1184](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1184)

***

### documentsManager

> **documentsManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:1185](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1185)

***

### knowledgeManager

> **knowledgeManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:1186](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1186)

***

### ragKnowledgeManager

> **ragKnowledgeManager**: [`IRAGKnowledgeManager`](IRAGKnowledgeManager.md)

#### Defined in

[packages/core/src/types.ts:1187](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1187)

***

### loreManager

> **loreManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:1188](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1188)

***

### cacheManager

> **cacheManager**: [`ICacheManager`](ICacheManager.md)

#### Defined in

[packages/core/src/types.ts:1190](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1190)

***

### services

> **services**: `Map`\<[`ServiceType`](../enumerations/ServiceType.md), [`Service`](../classes/Service.md)\>

#### Defined in

[packages/core/src/types.ts:1192](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1192)

***

### clients

> **clients**: `Record`\<`string`, `any`\>

any could be EventEmitter
but I think the real solution is forthcoming as a base client interface

#### Defined in

[packages/core/src/types.ts:1195](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1195)

***

### verifiableInferenceAdapter?

> `optional` **verifiableInferenceAdapter**: [`IVerifiableInferenceAdapter`](IVerifiableInferenceAdapter.md)

#### Defined in

[packages/core/src/types.ts:1197](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1197)

## Methods

### initialize()

> **initialize**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1199](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1199)

***

### registerMemoryManager()

> **registerMemoryManager**(`manager`): `void`

#### Parameters

• **manager**: [`IMemoryManager`](IMemoryManager.md)

#### Returns

`void`

#### Defined in

[packages/core/src/types.ts:1201](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1201)

***

### getMemoryManager()

> **getMemoryManager**(`name`): [`IMemoryManager`](IMemoryManager.md)

#### Parameters

• **name**: `string`

#### Returns

[`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:1203](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1203)

***

### getService()

> **getService**\<`T`\>(`service`): `T`

#### Type Parameters

• **T** *extends* [`Service`](../classes/Service.md)

#### Parameters

• **service**: [`ServiceType`](../enumerations/ServiceType.md)

#### Returns

`T`

#### Defined in

[packages/core/src/types.ts:1205](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1205)

***

### registerService()

> **registerService**(`service`): `void`

#### Parameters

• **service**: [`Service`](../classes/Service.md)

#### Returns

`void`

#### Defined in

[packages/core/src/types.ts:1207](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1207)

***

### getSetting()

> **getSetting**(`key`): `string`

#### Parameters

• **key**: `string`

#### Returns

`string`

#### Defined in

[packages/core/src/types.ts:1209](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1209)

***

### getConversationLength()

> **getConversationLength**(): `number`

Methods

#### Returns

`number`

#### Defined in

[packages/core/src/types.ts:1212](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1212)

***

### processActions()

> **processActions**(`message`, `responses`, `state`?, `callback`?): `Promise`\<`void`\>

#### Parameters

• **message**: [`Memory`](Memory.md)

• **responses**: [`Memory`](Memory.md)[]

• **state?**: [`State`](State.md)

• **callback?**: [`HandlerCallback`](../type-aliases/HandlerCallback.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1214](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1214)

***

### evaluate()

> **evaluate**(`message`, `state`?, `didRespond`?, `callback`?): `Promise`\<`string`[]\>

#### Parameters

• **message**: [`Memory`](Memory.md)

• **state?**: [`State`](State.md)

• **didRespond?**: `boolean`

• **callback?**: [`HandlerCallback`](../type-aliases/HandlerCallback.md)

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[packages/core/src/types.ts:1221](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1221)

***

### ensureParticipantExists()

> **ensureParticipantExists**(`userId`, `roomId`): `Promise`\<`void`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1228](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1228)

***

### ensureUserExists()

> **ensureUserExists**(`userId`, `userName`, `name`, `source`): `Promise`\<`void`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **userName**: `string`

• **name**: `string`

• **source**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1230](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1230)

***

### registerAction()

> **registerAction**(`action`): `void`

#### Parameters

• **action**: [`Action`](Action.md)

#### Returns

`void`

#### Defined in

[packages/core/src/types.ts:1237](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1237)

***

### ensureConnection()

> **ensureConnection**(`userId`, `roomId`, `userName`?, `userScreenName`?, `source`?): `Promise`\<`void`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **userName?**: `string`

• **userScreenName?**: `string`

• **source?**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1239](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1239)

***

### ensureParticipantInRoom()

> **ensureParticipantInRoom**(`userId`, `roomId`): `Promise`\<`void`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1247](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1247)

***

### ensureRoomExists()

> **ensureRoomExists**(`roomId`): `Promise`\<`void`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1249](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1249)

***

### composeState()

> **composeState**(`message`, `additionalKeys`?): `Promise`\<[`State`](State.md)\>

#### Parameters

• **message**: [`Memory`](Memory.md)

• **additionalKeys?**

#### Returns

`Promise`\<[`State`](State.md)\>

#### Defined in

[packages/core/src/types.ts:1251](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1251)

***

### updateRecentMessageState()

> **updateRecentMessageState**(`state`): `Promise`\<[`State`](State.md)\>

#### Parameters

• **state**: [`State`](State.md)

#### Returns

`Promise`\<[`State`](State.md)\>

#### Defined in

[packages/core/src/types.ts:1256](https://github.com/JoeyKhd/eliza/blob/main/packages/core/src/types.ts#L1256)
