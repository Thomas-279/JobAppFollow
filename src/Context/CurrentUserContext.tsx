import React, { createContext, useEffect, useState } from "react";
import api from '../components/utils/api';

export type UserType = {
    email: string,
    name: string,
    status: string,
    isAuthenticated: boolean
}
export type UserContextType = {
    currentUser?: UserType,
    setCurrentUser: (user: UserType) => void,
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
    const [authLoading, setAuthLoading] = useState(true);

    const handleLogout = () => {
        // remove user from local storage to log user out
        setCurrentUser(null);
        localStorage.removeItem('auth-token');
    };

    const stateValues = {
        currentUser,
        setCurrentUser,
        setAuthLoading,
        authLoading,
        handleLogout
    };

    return <CurrentUserContext.Provider value={stateValues}>{children}</CurrentUserContext.Provider>;
}