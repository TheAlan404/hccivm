import { BaseStorageConfig, StorageGenerator } from "../store";

interface LocalJSONConfig extends BaseStorageConfig {
    singleItem: boolean,
    itemName: string,

    itemPrefix: string,
};

const LocalJSON: StorageGenerator<LocalJSONConfig> = {
    features: [],
    generate: async ({
        onReady,
        onError,
        onInitializeError,
        onProgress,
    }, {
        singleItem,
        itemName = "items",
        itemPrefix = "",
    }) => {
        let _data = singleItem && JSON.parse(localStorage.getItem(itemName) || "{}");
    
        return {
            getItems() {
                
            },
            modifyItem(id, patch) {
                
            },
            deleteItem(id, patch) {
                
            },
        };
    },
}

export default LocalJSON;