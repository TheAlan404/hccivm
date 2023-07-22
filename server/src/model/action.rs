use std::collections::HashMap;

use serde_json::Value;

use super::item::Item;

pub enum Action {
    Lockdown(String),

    CreateInventory {
        name: String,
    },

    CreateItem {
        item: Item,
    },

    EditItem {
        id: String,
        patch: HashMap<String, Value>,
    },

    DeleteItem(String),
}