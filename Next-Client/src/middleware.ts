import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/services/user";

export async function middleware(request: NextRequest) {

    const user = await getUser();

    const currentPath = request.nextUrl.pathname;

    if (currentPath.startsWith("/dashboard") && user?.ok === false) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();

};