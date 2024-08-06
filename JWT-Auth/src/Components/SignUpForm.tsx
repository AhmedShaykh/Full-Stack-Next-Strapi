"use client";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { signup } from "@/actions/signup";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

const SignUpForm = () => {

    const [state, action] = useFormState(signup, undefined);

    return (
        <div className="grid place-items-center h-screen">
            <div className="flex flex-col p-4 w-1/3">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        Create an account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Enter your information to get started
                    </p>
                </div>

                <div className="mt-6">
                    <form action={action}>
                        <div className="flex flex-col gap-2">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" placeholder="John Doe" />
                            </div>

                            {state?.errors?.name && (
                                <p className="text-sm text-red-500">{state.errors.name}</p>
                            )}

                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" placeholder="john@example.com" />
                            </div>

                            {state?.errors?.email && (
                                <p className="text-sm text-red-500">{state.errors.email}</p>
                            )}

                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" name="password" type="password" />
                            </div>

                            {state?.errors?.password && (
                                <div className="text-sm text-red-500">
                                    <p>Password must:</p>

                                    <ul>
                                        {state.errors.password.map((error) => (
                                            <li key={error}>- {error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <SignupButton />
                        </div>
                    </form>
                </div>

                <div className="mt-6 text-center text-sm">
                    Already have an account?{" "}

                    <Link className="underline" href="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
};

export function SignupButton() {

    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type="submit" className="mt-2 w-full">
            {pending ? "Submitting..." : "Sign Up"}
        </Button>
    )
};

export default SignUpForm;