import React, { useContext, useState } from "react";
import { Schema } from "../../lib/types/schema";

export interface ISchemaContext {
    schema: Schema,
}

export const SchemaContext = React.createContext<ISchemaContext>();

export const SchemaProvider = ({
    children,
    schema,
}: {
    children: JSX.Element,
    schema: Schema,
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
