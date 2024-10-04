"use server";

import {cookies} from "next/headers";

async function getToken() {
    const tokenCookie = await cookies().get("token");
    return tokenCookie?.value || "";
}

export default getToken;