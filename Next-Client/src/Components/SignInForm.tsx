"use client";
import { loginUserAction } from "@/actions/auth-actions";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/Components/ui/card";
import SubmitButton from "./SubmitButton";
import StrapiErrors from "./StrapiErrors";
import ZodErrors from "./ZodErrors";
import { useFormState } from "react-dom";
import Link from "next/link";

const INITIAL_STATE = {
    zodErrors: null,
    strapiErrors: null,
    data: null,
    message: null
};

const SignInForm = () => {

    const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

    return (
        <div className="w-full max-w-md">
            <form action={formAction}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold">Sign In</CardTitle>

                        <CardDescription>
                            Enter your details to sign in to your account
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                placeholder="username or email"
                                id="identifier"
                                name="identifier"
                                type="text"
                            />
                            <ZodErrors error={formState?.zodErrors?.identifier} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                            <ZodErrors error={formState.zodErrors?.password} />
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col">
                        <SubmitButton
                            className="w-full"
                            text="Sign In"
                            loadingText="Loading"
                        />

                        <StrapiErrors error={formState?.strapiErrors} />
                    </CardFooter>
                </Card>

                <div className="mt-4 text-center text-sm">
                    Don't have an account?

                    <Link
                        className="underline ml-2"
                        href="/signup"
                    >
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;