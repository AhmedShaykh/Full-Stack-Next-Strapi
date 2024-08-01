import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/services/user";

export async function middleware(request: NextRequest) {

    const user = await getUser();

    const path = request.nextUrl.pathname;

    if (user?.ok === false && path.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    if (user?.ok === true && path.startsWith("/signin")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (user?.ok === true && path.startsWith("/signup")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();

};