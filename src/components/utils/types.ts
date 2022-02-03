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