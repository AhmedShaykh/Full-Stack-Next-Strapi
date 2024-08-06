"use server";
import { FormState, SignupFormSchema } from "@/lib/schema";
import { createSession } from "@/lib/session";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function signup(
    state: FormState,
    formData: FormData
): Promise<FormState> {

    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, password } = validatedFields.data;

    const existingUser = await db.user.findUnique({ where: { email } });

    if (existingUser) {
        return {
            message: "Email already exists, please use a different email or login.",
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    const user = data;

    if (!user) {
        return {
            message: "An error occurred while creating your account.",
        };
    }

    redirect("/login");

};