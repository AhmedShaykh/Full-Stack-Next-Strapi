import { FC } from "react";
import { Button } from "@/Components/ui/button";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/services/user";
import Logo from "@/Components/Logo";
import Link from "next/link";

interface NavbarProps {
    data: {
        logoText: {
            id: number;
            text: string;
            url: string;
        };
        ctaButton: {
            id: number;
            text: string;
            url: string;
        };
    }
};

export function LoggedInUser({
    userData
}: {
    readonly userData: any
}) {
    return (
        <div className="flex gap-2">
            <h2 className="font-semibold hover:text-primary">
                {userData.username}
            </h2>

            <LogoutButton />
        </div>
    )
};

const Navbar: FC<NavbarProps> = async ({ data }) => {

    const user = await getUser();

    const { logoText, ctaButton } = data;

    return (
        <div className="flex items-center justify-between px-4 py-3 shadow-md bg-gray-800">
            <Logo text={logoText.text} />

            <div className="flex items-center gap-4 px-4">
                {user?.ok ? (
                    <LoggedInUser userData={user.data} />
                ) : (
                    <Link href={ctaButton.url}>
                        <Button className="font-semibold">
                            {ctaButton.text}
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default Navbar;