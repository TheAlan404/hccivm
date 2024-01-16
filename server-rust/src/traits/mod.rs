use async_trait::async_trait;
use thiserror::Error;

use crate::model::{inventory::Inventory, item::Item};

#[derive(Error, Debug)]
pub enum DatabaseError {
    #[error("SQLite Error")]
    SQLite(#[from] rusqlite::Error),
}

#[async_trait]
pub trait DatabaseProvider {
    async fn initialize(&self) -> Result<(), String>;

    async fn should_setup(&self) -> Result<bool, DatabaseError>;
    async fn setup(&self) -> Result<(), DatabaseError>;

    async fn get_inventory(&self, id: &str) -> Result<Inventory, DatabaseError>;
    async fn set_inventory(&self, id: &str, inv: &Inventory) -> Result<(), DatabaseError>;
    async fn add_inventory(&self, id: &str, inv: &Inventory) -> Result<(), DatabaseError>;
    async fn delete_inventory(&self, id: &str) -> Result<(), DatabaseError>;
    async fn get_all_inventories(&self, ns: &str) -> Result<Vec<Inventory>, DatabaseError>;
    async fn get_all_inventory_ids(&self, ns: &str) -> Result<Vec<String>, DatabaseError>;

    async fn get_item(&self, inv: &str, id: &str) -> Result<Item, DatabaseError>;
    async fn set_item(&self, inv: &str, id: &str, item: &Item) -> Result<(), DatabaseError>;
    async fn add_item(&self, inv: &str, id: &str, item: &Item) -> Result<(), DatabaseError>;
    async fn delete_item(&self, inv: &str, id: &str) -> Result<(), DatabaseError>;
    async fn get_all_items(&self, inv: &str) -> Result<Vec<Item>, DatabaseError>;
    async fn get_all_item_ids(&self, inv: &str) -> Result<Vec<String>, DatabaseError>;
}