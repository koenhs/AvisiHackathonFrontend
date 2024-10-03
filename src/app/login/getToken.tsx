"use server";

import {cookies} from "next/headers";

function getToken() {
    console.log("test")
    return cookies().get("token")?.value || "";
}

export default getToken;