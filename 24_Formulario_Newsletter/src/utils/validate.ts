import { User } from "../types/user";

type Error = {
    [key: string]: string;
}

export const validate = (data: User) => {
    const errors: Error = {}

    if (!data.name || data.name.trim() === "") {
        errors.name = "O nome é obrigatório.";
    }

    if (!data.email || data.email.trim() === "") {
        errors.email = "O email é obrigatório.";
    }

    if (!data.agree) {
        errors.agree = "Você deve concordar com os termos.";
    }

    return errors
}