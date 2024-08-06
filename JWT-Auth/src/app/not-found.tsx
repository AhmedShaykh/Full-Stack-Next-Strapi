import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const NotFoundPage = async () => {

    const cookie = cookies().get("session")?.value;

    const session = await decrypt(cookie);

    if (session?.userId) redirect("/dashboard");

    return redirect("/login");

};

export default NotFoundPage;