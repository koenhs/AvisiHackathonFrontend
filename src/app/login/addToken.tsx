"use server";

import {cookies} from "next/headers";

function addToken(token: string) {
    cookies().set('token', token);
}

export default addToken;