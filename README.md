# hccivm

The inventory editor.

## Goal

An inventory system designed to be as flexible as possible.

Very many use cases, and configurable for:

- Libraries (keeping count of books)
- Workshops (items inventory)
- Stock-related anything actually

## TODO

- [ ] find better name
- [ ] spec
- [ ] rust backend
  - [ ] base
  - [ ] db api
  - [ ] users
  - [ ] permissions
  - [ ] stuff
- [ ] react frontend

## Specification

```md
// every instance:
Server {
    name: string,
    description: string,
    Namespace,
}

// namespaces can be thought like they are "guilds" in discord
Namespace {
    id: string,
    name: string,
    User[],
    Role[],
    Inv[]
}

// an inventory that contains items
Inv {
    name: string,
    id: string,
    permissions,
    Schema,
    Item[],
}
```

Schemas define the properties of items in an inventory, its similar to a json schema.

Example schema:

```js
{
    name: { type: "string" },
    amount: { type: "number" },
    description: { type: "string" },
}
```

Example item according to the schema:

```js
{
    name: "Hammer",
    amount: 1,
    description: "A hammer"
}
```

Schemas would also contain info about renderers and such, for example a `shortDesc` would have "short text view" and a `description` would have a "long text view"

### Database

Thinking of making it database-agnostic but that might be harder than i thought...

### Security

Namespaces should be very configurable

- allow/disable user registration
- pending registrations page
- permissions for creating, deleting, restricting users
- custom roles with permissions
- lockdown (readonly or none)

Should also have some sort of high level logging, complex enough to undo actions.

### Plugins

This system should be extensible via plugins. Plugins can be embedded in the app (using some yet-to-be-specified API) or use HCCIVM's HTTP or WS API.

### API

All requests and responses use JSON format since this project (attempts) is sane

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

### Permissions

Permissions are namespaced, the format is `namespace:perms`. Perms can be split using `.`. The convention is `[a-z0-9_]`

For example: `my_plugin:notes.create`

Available permissions for `core`:

- `core:users.create`
- `core:users.delete`
- `core:users.edit.username`
- `core:users.auth.reset`
  - Reset passwords of other users
- `core:config.edit`
- `core:inv.create`
- TODO

### WebSocket API

The websocket api allows users to edit in real-time, making HCCIVM even more pain to code but removing a lot of race conditions (hopefully)

### The Schema

should,, be good

```ts
type Schema = Map<String, Prop>

type Prop = {
  type: Ty,
  label: string?,
  desc: string?,

  autocomplete: bool,

  // only on select
  values: string[],
}

enum Ty {
  string,
  number,
  count,
  media,
  link,
  select,
  users,
}
```

ex. 1

```js
{
  name: { type: "string", label: "Book Name" },
  author: { type: "string", label: "Book Author", autocomplete: true },
  count: { type: "count", label: "Amount Left" },
}
```
