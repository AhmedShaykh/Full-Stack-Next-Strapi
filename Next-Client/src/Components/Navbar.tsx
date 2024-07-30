import { FC } from "react";
import { Button } from "@/Components/ui/button";
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

const Navbar: FC<NavbarProps> = ({ data }) => {

    const { logoText, ctaButton } = data;

    return (
        <div className="flex items-center justify-between px-4 py-3 shadow-md bg-gray-800">
            <Logo text={logoText.text} />

            <div className="flex items-center gap-4 px-4">
                <Link href={ctaButton.url}>
                    <Button className="font-semibold">
                        {ctaButton.text}
                    </Button>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;