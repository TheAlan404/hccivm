use rusqlite::Connection;

use crate::traits::DatabaseProvider;

#[derive(Debug)]
pub struct SQLiteMemoryDB {
    pub conn: Connection,
    pub table_users: String,
    pub table_inventories: String,
}

impl Default for SQLiteMemoryDB {
    fn default() -> Self {
        Self {
            conn: Connection::open_in_memory().expect("SQLiteDB Default: Cant open sqlite connection in memory"),
            table_: ""
        }
    }
}

impl SQLiteMemoryDB {
    pub fn init_in_memory() -> rusqlite::Result<Self> {
        let conn = Connection::open_in_memory()?;

        Ok(Self {
            conn
        })
    }
}

#[async_trait]
impl DatabaseProvider for SQLiteMemoryDB {
    async fn initialize(&self) -> Result<(), String> {
        Ok(())
    }

    async fn should_setup(&self) -> Result<bool, DatabaseError> {
        Ok(true)
    }

    async fn setup(&self) -> Result<(), DatabaseError> {
        self.conn.execute("CREATE TABLE IF NOT EXISTS ", params).map(|_| ())
    }
}
