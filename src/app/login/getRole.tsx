"use server";

import {cookies} from "next/headers";

async function getRole() {
    const tokenCookie = await cookies().get("role");
    return tokenCookie?.value || "";
}

export default getRole;