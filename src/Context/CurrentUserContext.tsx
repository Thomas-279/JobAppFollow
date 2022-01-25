import React, { createContext, useEffect, useState } from "react";

export type UserType = {
    email: string,
    password: string
}
export type UserContextType = {
    currentUser?: UserType,
    setCurrentUser: (user: UserType) => void,
    checkLogin: () => void,
    setAuthLoading: (isLoading: boolean) => void,
    authLoading: boolean,
    handleLogout: () => void,
}

export const CurrentUserContext = createContext<UserContextType>(null);

type ProviderProps = {
    children: React.ReactNode,
}
export function CurrentUserProvider ({ children }: ProviderProps) {
    const [currentUser, setCurrentUser] = useState<UserType>();
    const [authLoading, setAuthLoading] = useState(false);

    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        console.log("checkLogin")
    };

    const handleLogout = () => {
        // remove user from local storage to log user out
        setCurrentUser(null);
    };

    const stateValues = {
        currentUser,
        setCurrentUser,
        checkLogin,
        setAuthLoading,
        authLoading,
        handleLogout
    };

    return <CurrentUserContext.Provider value={stateValues}>{children}</CurrentUserContext.Provider>;
}