import { InventoryItem } from "./item";
import { InventorySchema } from "./schema";

interface Inventory<T extends InventorySchema> {
    schema: T,
    items: InventoryItem<T>[],
}
