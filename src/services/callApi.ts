import getToken from "@/app/login/getToken";

const BASE_URL = "http://localhost:8080/api/";

export async function post<T>(body: T, url: string): Promise<Response> {
    const token = getToken();
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: JSON.stringify(body),
    });
}