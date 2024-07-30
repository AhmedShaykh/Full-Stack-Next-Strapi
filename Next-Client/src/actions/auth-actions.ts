"use server";
import { schemaLogin, schemaRegister } from "@/lib/schema";

const config = {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    domain: process.env.HOST ?? "localhost",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
};

export async function registerUserAction(prevState: any, formData: FormData) {

    const validatedFields = schemaRegister.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password")
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            strapiErrors: null,
            message: "Missing Fields. Failed to Register."
        };
    }

};

export async function loginUserAction(prevState: any, formData: FormData) {

    const validatedFields = schemaLogin.safeParse({
        identifier: formData.get("identifier"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Login."
        };
    }

};