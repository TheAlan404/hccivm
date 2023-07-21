#[macro_use] extern crate rocket;

pub mod model;
pub mod traits;
pub mod db;

pub mod routes;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![
        index
    ])
}
