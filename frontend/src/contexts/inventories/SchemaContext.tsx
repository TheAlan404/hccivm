import React, { useContext, useState } from "react";
import { InventorySchema } from "../../lib/types/schema";

export interface ISchemaContext {
    schema: InventorySchema,
}

export const SchemaContext = React.createContext<ISchemaContext>();

export const SchemaProvider = ({
    children,
    schema,
}: {
    children: JSX.Element,
    schema: InventorySchema,
}) => {
    return (
        <SchemaContext.Provider
            value={schema}
        >
            {children}
        </SchemaContext.Provider>
    )
}

export const useSchema = () => {
    return useContext(SchemaContext);
}
