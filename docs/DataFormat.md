# Data Format Specification

[<- Back](./README.md)

# Server Instance

```ts
interface Server {
	name: string,
	description: string,
	namespace: Namespace,
}
```

# Namespace

```ts
interface Namespace {
	id: string,
	name: string,
	users: User[],
	roles: Role[],
	inventories: Inventory[],
}
```

# User

```ts
interface User {
	id: string,
	username: string,
	passwordHash: string,
}
```

# Role

# Inventory

```ts
interface Inventory {
    id: string,
	name: string,
    permissions,
    schema: Schema,
    items: Item[],
}
```

# Schema

Schemas define the properties of items in an inventory, its similar to a json schema.

```ts
type InventorySchema = {
    properties: Record<string, ItemProperty>,
};
```

Example schema:

```ts
let ex: Schema = {
    properties: {
		name: { type: "string" },
		amount: { type: "number" },
		description: { type: "string" },
	}
}
```

# Item

Example item according to the schema:

```ts
{
    name: "Hammer",
    amount: 1,
    description: "A hammer"
}
```

```ts
const exampleSchema: InventorySchema = {
	properties: {
		name: { type: "string", label: "Book Name" },
		author: { type: "string", label: "Book Author", autocomplete: true },
		count: { type: "count", label: "Amount Left" },
	}
}

const exampleItem: InventoryItem<typeof exampleSchema> = {
	name: "1984",
	author: "George Orwell",
	count: 100,
} 
```

### Database

Thinking of making it database-agnostic but that might be harder than i thought...
