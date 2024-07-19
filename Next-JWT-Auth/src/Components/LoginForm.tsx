"use client";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { login } from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

const LoginForm = () => {

    const [state, action] = useFormState(login, undefined);

    return (
        <div className="grid place-items-center h-screen">
            <div className="flex flex-col p-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Login</h1>

                    <p className="text-gray-500 mt-2">
                        Enter your email below to login to your account
                    </p>
                </div>

                <div className="mt-6">
                    <form action={action}>
                        <div className="flex flex-col gap-2">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="m@example.com"
                                    type="email"
                                />

                                {/* {state?.errors?.email && (
                                    <p className="text-sm text-red-500">{state.errors.email}</p>
                                )} */}
                            </div>

                            <div className="mt-4">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" name="password" />

                                {/* {state?.errors?.password && (
                                    <p className="text-sm text-red-500">{state.errors.password}</p>
                                )} */}
                            </div>

                            {/* {state?.message && (
                                <p className="text-sm text-red-500">{state.message}</p>
                            )} */}
                            <LoginButton />
                        </div>
                    </form>

                </div>

                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}

                    <Link className="underline" href="/signup">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
};

export function LoginButton() {

    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type="submit" className="mt-2 w-full">
            {pending ? "Submitting..." : "Login"}
        </Button>
    )
};

export default LoginForm;