export type Schema = Record<string, ItemProperty>;

export interface ItemProperty {
    type: ItemPropertyType,
    label: string?,
    desc: string?,

    autocomplete: bool,
    values: string[],
}

export enum ItemPropertyType {
    text = "text",
    number = "number",
}

export type ValueOf<T> = T extends "text" ? string : (
    T extends "number" ? number : never
);
