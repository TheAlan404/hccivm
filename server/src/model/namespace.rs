use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Namespace {
    pub id: String,
    pub name: String,
    pub inventory_ids: Vec<String>,
    pub database: DatabaseType,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum DatabaseType {
    SQLiteMemory,
    SQLiteLocal { path: String },
    SQLiteRemote { uri: String },
    MongoDB {

    }
}
