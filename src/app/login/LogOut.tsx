"use server";

import {cookies} from "next/headers";

function logOut() {
    cookies().set({
        name: "token",
        value: "",         // Set an empty value (optional)
        expires: new Date(0)  // Set the expiration date to a past date
    });
}

export default logOut;