export const NullItem: Item = {
    id: "",
    name: "Item",
    amount: 1,
    category: [],
    description: "",
    notes: [],
    properties: [],
};

export type Item = {
    id: string;
    name: string;
    description: string;
    notes: string[];
    amount: number;
    properties: object[] | object;
    category: string[];
};