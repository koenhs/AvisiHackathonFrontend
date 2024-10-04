import getToken from "@/app/login/getToken";

export async function post<T>(body: T, url: string): Promise<Response> {
    const token = await getToken();
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: JSON.stringify(body),
    });
}

export async function deleteFun(url: string): Promise<Response> {
    const token = await getToken();
    return await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        },
    });
}