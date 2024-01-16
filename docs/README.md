# Design Documentation

Docs:

- [Data format](./DataFormat.md)
- [API routes](./API.md)
- [Permissions](./Permissions.md)

Below are some "concepts" or "ideas"

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
