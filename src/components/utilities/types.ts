import { Stringifier } from "postcss";

export interface objectValueProps {
    id: any,
    firm: string,
    date: string,
    via: string,
    job: string,
    comment: string,
    status: string,
}

export interface darkModeProps {
    darkMode: boolean
}

export interface UserForm {
    isSubmitting: boolean;
    email: string;
    password: string;
};

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    status: string;
}

export interface Row {
    id: number;
    firm: string;
    date: string;
    via: string;
    job: string;
    comment: string;
    status: string;
}