"use server";

import {cookies} from "next/headers";

const addToken = (token: string) => {
    cookies().set('token', token);
}

export default addToken;