"use server";

import {cookies} from "next/headers";

async function getToken() {
    console.log("test")
    return cookies().get("token");
}

export default getToken;