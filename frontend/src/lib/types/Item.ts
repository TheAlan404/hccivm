import { ItemPropertyType, InventorySchema, SchemaTypeToItemType } from "./schema";

export type InventoryItem<T extends InventorySchema> = {
    [K in keyof T["properties"]]: SchemaTypeToItemType<T["properties"][K]["type"]>;
};
