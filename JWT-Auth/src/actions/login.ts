"use server";
import { FormState, LoginFormSchema } from "@/lib/schema";
import { createSession } from "@/lib/session";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";

export async function login(
    state: FormState,
    formData: FormData
): Promise<FormState> {

    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    });

    const errorMessage = { message: "Invalid login credentials." };

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validatedFields.data;

    const user = await db.user.findUnique({ where: { email } });

    if (!user) {
        return errorMessage;
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatch) {
        return errorMessage;
    }

    const userId = user.id;

    await createSession(userId);

};