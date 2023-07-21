use serde::{Serialize, Deserialize};

pub struct Namespace {
    pub id: String,
    pub name: String,
    pub inventory_ids: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct NamespaceConfig {
    database: DatabaseType,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum DatabaseType {
    InMemorySQLite,
    SQLiteLocal { path: String },
    SQLiteRemote { uri: String },
    MongoDB {

    }
}
