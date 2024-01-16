use std::collections::HashMap;

use serde_json::Value;

pub struct Item {
    pub id: String,
    pub properties: HashMap<String, Value>
}
