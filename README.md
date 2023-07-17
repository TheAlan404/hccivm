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

## Spec

```md
Server {
    Namespace[],
}

Namespace {
    id,
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
