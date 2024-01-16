# Permissions

[<- Back](./README.md)

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

