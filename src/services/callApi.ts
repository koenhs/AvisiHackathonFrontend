"use server";

import {cookies} from "next/headers";
import logOut from "@/app/login/LogOut";
import { redirect } from 'next/navigation'

const BASE_URL = "http://localhost:8080/api/";

type DataType<T> = Record<string, T> | T;

export const callApi = async <T, A>(
    endpoint: string,
    data: DataType<T> = {} as DataType<T>,
    method: string = 'GET'
): Promise<A> => {
    const token = cookies().get("token")?.value || "";
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    };

    if (method !== 'GET') {
        options.body = JSON.stringify(
            typeof data === 'object' && data !== null ? data : { value: data }
        );
    }

    const url = `${BASE_URL}${endpoint}`;
    return await fetch(url, options)
        .then((response) => {
            if (response.status === 401) {
                console.log("reroute to login");
                rerouteLogin();
                return response.json();
            }
            response.json()
                .then((data) => {
                const responseData: A = data;
                return responseData;
            })
                .catch((err) => {
                    console.error(err);
                    rerouteLogin();
                })
        })
        .catch((err) => {
        return Promise.reject(err);
    })
};

async function rerouteLogin() {
    logOut().then(
        redirect(`/login`)
    )
}
