import React from "react";
import { User } from "../lib/types/user";

export interface IAuthContext {
    isLoggedIn: boolean,
    token: string | null,
    user: User | null,

    logout: () => void,
    login: (username: string, passwd: string) => void,
}

export const AuthContext = React.createContext<IAuthContext>();

export const AuthProvider = ({
    children,
}: {
    children: JSX.Element
}) => {
    return (
        <AuthContext.Provider
            value={{

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
