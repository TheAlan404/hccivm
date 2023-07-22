# hccivm

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

## Spec ..?

```md
Server {
    Namespace,
}

Namespace {
    name,
    User[],
    Role[],
    Inv[]
}

Inv {
    name,
    id,
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

Schemas would also contain info about renderers and such, for example a `shortDesc` would have "short text view" and a `description` would have a "long text view"

### Database

Database api would be abstract to allow many configurations.

### Security

Namespaces should be very configurable

- allow/disable user registration
- pending registrations page
- permissions for creating, deleting, restricting users
- custom roles with permissions
- lockdown (readonly or none)

Should also have some sort of high level logging, complex enough to undo actions.

### API

- `GET api/v1/info`
- administration
  - `POST api/v1/lockdown`
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
- items
  - `GET api/v1/inventories/:invId/items?offset,amount,filter`
  - `POST   api/v1/inventories/:invId/items` (create new item)
  - `GET    api/v1/inventories/:invId/item/:itemId`
  - `PATCH  api/v1/inventories/:invId/item/:itemId` (edit)
  - `DELETE api/v1/inventories/:invId/item/:itemId`
- users
  - `GET api/v1/users?offset,amount,filter`
  - `POST api/v1/users` (create new user)
- user
  - `GET api/v1/users/:userId`
  - `DELETE api/v1/users/:userId`
  - `POST api/v1/users/:userId/restrict`
  - `POST api/v1/users/:userId/`
- roles
  - `GET api/v1/roles`
  - `POST api/v1/roles/new`
  - `PATCH api/v1/roles/:roleId`
  - `DELETE api/v1/roles/:roleId`
- permissions
  - `PATCH api/v1/inventories/:invId/permissions`
- history
  - `GET api/v1/logs?action,user,inv,item,before,after,limit,offset`
