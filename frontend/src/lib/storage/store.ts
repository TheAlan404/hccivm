import { Item } from "../types/Item";

type ErrorLike = Error | string | { message: string } | null;

export interface StoreContext {
    onReady(): void;
    onProgress(message: string): void;
    onError(e: ErrorLike): void;
    onInitializeError(e: ErrorLike): void;
}

export type BaseStorageConfig = {

}

export type StorageGenerator<Config extends BaseStorageConfig> = {
    generate: (ctx: StoreContext, cfg: Config) => Promise<StorageProvider>;
    features?: StorageProviderFeature[];
    description?: string;
};

enum StorageProviderFeature {
    "A",
    "B",
}

export interface StorageProvider {
    itemExists?: (id: string) => Promise<boolean>;
    getItem?: (id: string) => Promise<Item>;
    searchItems?: (query: string) => Promise<Item[]>;
    getItems?: (opts: { offset?: number, amount?: number }) => Promise<Item[]>;
    getItemsFiltered?: (filter?: object) => Promise<Item[]>;
    getAllItems?: () => Promise<Item[]>;
    modifyItem?: (id: string, patch: Partial<Item>) => Promise<void>;
    deleteItem?: (id: string) => Promise<void>;

    categoryExists?: (category: string) => Promise<boolean>;
}