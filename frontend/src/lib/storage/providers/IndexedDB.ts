import { Item, NullItem } from "../../types/Item";
import { BaseStorageConfig, StorageProviderInitializer } from "../store";

export interface IndexedDBProviderConfig extends BaseStorageConfig {
    idbName: string;
    idbVersion: number;
    idbStoreName: string;
};

const IndexedDBProvider: StorageProviderInitializer<IndexedDBProviderConfig> = async ({
    onReady,
    onProgress,
    onError,
    onInitializeError,
}, {
    idbName = "hccivm-idb",
    idbVersion = 1,
    idbStoreName = "items",
}) => {
    let db: IDBDatabase;

    const DBOpenRequest = window.indexedDB.open(idbName, idbVersion);

    DBOpenRequest.onerror = (ev) => onInitializeError((ev.target as IDBOpenDBRequest).error);

    DBOpenRequest.onsuccess = (e) => {
        db = DBOpenRequest.result;
        onReady();
    };

    DBOpenRequest.onupgradeneeded = (e) => {
        db = (e.target as IDBOpenDBRequest).result;
        
        db.onerror = (ev) => onInitializeError((ev.target as IDBOpenDBRequest).error);

        const objectStore = db.createObjectStore(idbStoreName, { keyPath: "id" });
        for(let key of Object.keys(NullItem)) {
            if(key == "id") continue;
            objectStore.createIndex(key, key, { unique: false });
        };

        onProgress("Object store created!");
    };

    const getObjStore = () => db.transaction(idbName).objectStore(idbStoreName);

    return {
        getItem: async () => { },
    };
};

export default IndexedDBProvider;