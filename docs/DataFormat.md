# Data Format Specification

[<- Back](./README.md)

```ts
// every instance:
interface Server {
    name: string,
    description: string,
    Namespace,
}

// namespaces can be thought like they are "guilds" in discord
interface Namespace {
    id: string,
    name: string,
    User[],
    Role[],
    Inv[]
}

// an inventory that contains items
interface Inv {
    name: string,
    id: string,
    permissions,
    schema: Schema,
    items: Item[],
}
```

Schemas define the properties of items in an inventory, its similar to a json schema.

Example schema:

```ts
Schema = {
    name: { type: "string" },
    amount: { type: "number" },
    description: { type: "string" },
}
```

Example item according to the schema:

```ts
{
    name: "Hammer",
    amount: 1,
    description: "A hammer"
}
```

Schemas would also contain info about renderers and such, for example a `shortDesc` would have "short text view" and a `description` would have a "long text view"

more example

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

### Database

Thinking of making it database-agnostic but that might be harder than i thought...
