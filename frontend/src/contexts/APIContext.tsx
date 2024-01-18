import React, { useState } from "react";
import { User } from "../lib/types/user";
import { DEFAULT_API_URL } from "../meta";

export interface IAPIContext {
    API_URL: string,
}

export const APIContext = React.createContext<IAPIContext>();

export const APIProvider = ({
    children,
}: {
    children: JSX.Element,
}) => {
    const [APIUrl, setAPIUrl] = useState(DEFAULT_API_URL);

    return (
        <APIContext.Provider
            value={{
                API_URL: APIUrl,
            }}
        >
            {children}
        </APIContext.Provider>
    )
}
