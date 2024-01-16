export type Schema = Record<string, ItemProperty>;

export interface ItemProperty {
    type: ItemPropertyType,
    label: string?,
    desc: string?,

    autocomplete: bool,
    values: string[],
}

export enum ItemPropertyType {
    string = "string",
    number = "number",
    count = "count",
    media = "media",
    link = "link",
    select = "select",
    users = "users",
}
