import { ReactNode } from "react";

const AuthLayout = ({
    children
}: {
    children: ReactNode;
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950">
            {children}
        </div>
    )
};

export default AuthLayout;