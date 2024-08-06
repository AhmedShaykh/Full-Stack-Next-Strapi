import Auth from "@/Components/AuthButtons";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { links } from "@/static";
import Link from "next/link";

const Navbar = async () => {

    const cookie = cookies().get("session")?.value;

    const session = await decrypt(cookie);

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

                <Auth session={session} />
            </div>
        </div>
    )
};

export default Navbar;