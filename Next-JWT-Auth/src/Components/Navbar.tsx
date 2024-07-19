import { MenuIcon } from "@/Components/ui/icons";
import { Button } from "@/Components/ui/button";
import Link from "next/link";

const links = [
    { href: "/", title: "Home" },
    { href: "/components", title: "Components" }
];

const Navbar = () => {
    return (
        <div className="border-b border-gray-600">
            <div className="container mx-auto flex max-w-7xl items-center justify-end px-4 py-6 md:justify-between md:px-6">
                <nav className="items-center space-x-8 flex">
                    {links.map((link) => (
                        <Link
                            className="text-lg font-semibold"
                            href={link.href}
                            key={link.title}
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>

                <div className="items-center space-x-4 flex">
                    <Link href="/login">
                        <Button>
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar;