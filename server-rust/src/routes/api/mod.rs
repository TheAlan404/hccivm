use rocket::serde::json::Json;

#[get("/api/v1")]
pub fn api_v1() -> Json<Vec<String>> {
    Json(vec![])
}

