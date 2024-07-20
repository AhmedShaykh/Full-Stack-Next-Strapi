"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const User = () => {

    const [loading, setLoading] = useState(true);

    const [typedText, setTypedText] = useState("");

    useEffect(() => {

        const text = "Next.JS JWT Authentication";

        let index = 0;

        const interval = setInterval(() => {

            if (index <= text.length) {

                setTypedText(text.slice(0, index));

                index++;

            } else {

                clearInterval(interval);

                setTimeout(() => {

                    setLoading(false);

                }, 1000);
            }
        }, 200);

        return () => clearInterval(interval);

    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center flex-1 h-screen">
                <div className="border-r-20 border-white whitespace-nowrap overflow-hidden animate-cursorBlink text-5xl font-bold pr-2">
                    {typedText}
                </div>
            </div>
        );
    }

    return redirect("/dashboard");

};

export default User;