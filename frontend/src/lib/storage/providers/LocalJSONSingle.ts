import { BaseStorageConfig, StorageGenerator } from "../store";

interface LocalJSONSingleConfig extends BaseStorageConfig {
    storeName: string;
};

const LocalJSONSingle: StorageGenerator<LocalJSONSingleConfig> = {
    description: "DB that uses localStorage. Good enough for few items - bad performance if you have too many",
    generate: async ({
        onReady,
        onError,
        onInitializeError,
        onProgress,
    }, {
        storeName = "items",
    }) => {
        onProgress("Reading data...");

        let _data = JSON.parse(localStorage.getItem(storeName) || JSON.stringify({
            items: {},
            categories: {},
        }));

        let write = () => {
            let str = JSON.stringify(_data);
            localStorage.setItem(storeName, str);
        };

        onReady();
    
        return {
            async itemExists(id) {
                return _data.items[id] != null;
            },
            async getAllItems() {
                return Object.values(_data.items);
            },
            async getItem(id) {
                return _data.items[id];
            },
            async modifyItem(id, patch) {
                for(let prop in patch) {
                    let original = _data.items[id];
                    
                }
            },
        };
    },
}

export default LocalJSON;