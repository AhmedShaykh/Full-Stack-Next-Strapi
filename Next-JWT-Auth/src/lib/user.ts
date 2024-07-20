import { cache } from "react";
import { verifySession } from "./session";
import { db } from "./db";

export const getUser = cache(async () => {

    const session = await verifySession();

    if (!session) return null;

    try {

        // const data = await db.user.findMany({
        //     where: {
        //         id: session.userId
        //     },
        //     columns: {
        //         id: true,
        //         name: true,
        //         email: true,
        //     }
        // });

        // const user = data[0];

        // return user;

    } catch {

        return null;

    }

});