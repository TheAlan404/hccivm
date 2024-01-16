# API

[<- Back](./README.md)

All requests and responses use JSON format since this project is (or, attempts to be) sane

## Routes

Routes marked as **Paginated** use query strings `offset` and `amount`.

Routes marked as **Filterable** use query strings `filter`

- `GET api/v1/info`: info about the server
- administration
  - `POST api/v1/lockdown`
    - begin or end lockdown
  - `GET api/v1/config`
  - `PATCH api/v1/config`
- auth
  - `POST api/v1/login`
  - `POST api/v1/logout`
  - `GET api/v1/users/me`
- inv
  - `GET api/v1/inventories`
  - `POST api/v1/inventories`
  - `GET api/v1/inventories/:invId`
  - `DELETE api/v1/inventories/:invId`
- inv schema
  - `PATCH api/v1/inventories/:invId/schema` (edit schema)
- ws
  - `WS api/v1/inventories/:invId/ws`
    - use a websocket connection for live editing
- items
  - `GET api/v1/inventories/:invId/items`
    - get items
    - paginated, filterable
  - `POST   api/v1/inventories/:invId/items`
    - create a new item
  - `GET    api/v1/inventories/:invId/item/:itemId`
    - get an item
  - `PATCH  api/v1/inventories/:invId/item/:itemId`
    - begin or finish editing an item
  - `DELETE api/v1/inventories/:invId/item/:itemId`
    - delete an item
- users
  - `GET api/v1/users`
    - get all users
    - paginated, filterable
  - `POST api/v1/users`
    - create a new user
- user
  - `GET api/v1/users/:userId`
  - `DELETE api/v1/users/:userId`
    - delete an user
  - `POST api/v1/users/:userId/restrict`
    - imposes or clears restrictions on an user
    - requires permissions
    - the user cant do anything while restricted, even if they have high permissions
  - `PATCH api/v1/users/:userId/`
    - edit user data
  - `PATCH api/v1/users/:userId/roles`
    - edit an user's roles
- roles
  - `GET api/v1/roles`
    - filterable
  - `POST api/v1/roles/new`
    - create new role
  - `PATCH api/v1/roles/:roleId`
    - edit a role
  - `DELETE api/v1/roles/:roleId`
    - delete a role
- permissions
  - `PATCH api/v1/inventories/:invId/permissions`
    - set permissions
- history
  - `GET api/v1/logs`
    - filterable `filter={action,user,inv,item}`
    - query string `before`, `after`
    - paginated


## WebSocket API

The websocket api allows users to edit in real-time, making HCCIVM even more pain to code but removing a lot of race conditions (hopefully)