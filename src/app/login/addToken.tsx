"use server";

import {cookies} from "next/headers";

function addToken(token: string, role: string) {
    cookies().set('token', token);
    cookies().set('role', role);
}

export default addToken;