use crate::model::{namespace::Namespace, inventory::Inventory, item::Item};

pub struct MemoryDB {
    pub namespaces: Vec<Namespace>,
    pub inventories: Vec<Inventory>,
    pub items: Vec<Item>,
}
