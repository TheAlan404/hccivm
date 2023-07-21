use async_trait::async_trait;

use crate::model::{inventory::Inventory, item::Item};

pub struct DatabaseError {}

#[async_trait]
pub trait DatabaseProvider {
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