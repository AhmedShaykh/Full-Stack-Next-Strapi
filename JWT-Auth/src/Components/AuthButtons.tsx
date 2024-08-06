"use client";
import { FC } from "react";
import { LogOutIcon } from "@/Components/ui/icons";
import { Button } from "@/Components/ui/button";
import { logout } from "@/actions/logout";
import Link from "next/link";

const AuthButtons: FC<any> = ({ session }) => {
    return (
        <div className="items-center space-x-4 flex">
            {session?.userId ? (
                <Button
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-all hover:text-gray-900"
                    onClick={async () => {
                        await logout();
                    }}
                >
                    <LogOutIcon className="h-4 w-4" />
                    Log Out
                </Button>
            ) : (
                <Link href="/login">
                    <Button>
                        Login
                    </Button>
                </Link>
            )}
        </div>
    )
};

export default AuthButtons;