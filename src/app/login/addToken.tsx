"use server";

import {cookies} from "next/headers";

function addToken(token: string) {
    cookies().set('token', token);
    console.log("token set completed")
}

export default addToken;