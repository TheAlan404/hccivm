import { ItemPropertyType, ValueOf } from "../../lib/types/schema";
import { ItemFieldText } from "./fields/ItemFieldText";

export type ItemFieldVariant = "default" | "row";

export const ItemFieldComponents: Record<ItemPropertyType, JSX.Element> = {
    text: ItemFieldText,
};

export const ItemFieldRenderer = <T extends ItemPropertyType,>({
    variant = "default",
    type = "text",
}: {
    variant: ItemFieldVariant,
    type: T,
    data: ValueOf<T>,
}) => {
    let Component = ItemFieldComponents[type];
}
