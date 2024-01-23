export type InventorySchema = {
    properties: Record<string, ItemProperty>,
};

export type SchemaTypeToItemType<T> = T extends { type: "string" } ? string : T extends { type: "number" } ? number : never;


export interface BaseItemProperty {
    type: string,
    label: string?,
    desc: string?,
};

export type ItemProperty = BaseItemProperty & (
    ItemPropertyString
    | ItemPropertyNumber
);

export type ItemPropertyString = {
    type: "string",
    value: string,
};

export type ItemPropertyNumber = {
    type: "number",
    value: number,
};


