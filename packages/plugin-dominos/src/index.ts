import { Plugin } from "@elizaos/core";
import { confirmOrder } from "./actions/confirmOrder.ts";
import { endOrder } from "./actions/endOrder.ts";
import { startOrder } from "./actions/startOrder.ts";
import { updateCustomer } from "./actions/updateCustomer.ts";
import { updateOrder } from "./actions/updateOrder.ts";
import { pizzaOrderProvider } from "./providers/pizzaOrder.ts";

export * as actions from "./actions/index.ts";
export * as providers from "./providers/index.ts";

export const dominosPlugin: Plugin = {
    name: "dominos",
    description: "Order a dominos pizza",
    actions: [startOrder, endOrder, updateCustomer, updateOrder, confirmOrder],
    providers: [pizzaOrderProvider],
};
