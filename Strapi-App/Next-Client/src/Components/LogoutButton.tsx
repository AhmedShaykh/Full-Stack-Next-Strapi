import { logoutAction } from "@/actions/auth-actions";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
    return (
        <form action={logoutAction}>
            <button
                className="flex items-center gap-3"
                type="submit"
            >
                <LogOut className="w-6 h-6 hover:text-primary" /> Log Out
            </button>
        </form>
    )
};

export default LogoutButton;