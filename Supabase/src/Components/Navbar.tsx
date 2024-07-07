"use client";
import { useContext } from "react";
import CreateProfileContext from "@/context/CreateProfileContext";
import AuthModalContext from "@/context/AuthModalContext";
import { Button } from "@/Components/ui/button";
import Link from "next/link";


const Navbar = () => {

    const { toggleAuthModal } = useContext(AuthModalContext);

    const { toggleCreateProfileModal } = useContext(CreateProfileContext);

    return (
        <nav className="border-b-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    className="flex items-center space-x-3 p-2 rounded-sm font-semibold"
                    href="/"
                >
                    Home
                </Link>

                <div className="flex items-center space-x-5 w-auto">
                    <Link
                        className="block rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 font-semibold"
                        href="/profile"
                    >
                        Profile
                    </Link>

                    <Button onClick={toggleCreateProfileModal} variant="outline">
                        Update Profile
                    </Button>

                    <Button onClick={toggleAuthModal} variant="destructive">
                        Auth
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;