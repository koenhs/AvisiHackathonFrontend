const BASE_URL = "http://localhost:8080/api/";

type DataType<T> = Record<string, T> | T;

export const callApi = async <T, A>(
    endpoint: string,
    data: DataType<T> = {} as DataType<T>,
    method: string = 'GET'
): Promise<A> => {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (method !== 'GET') {
        options.body = JSON.stringify(
            typeof data === 'object' && data !== null ? data : { value: data }
        );
    }

    const url = `${BASE_URL}${endpoint}`;
    return await fetch(url, options)
        .then(response => response.json())
        .then((data) => {
            const responseData: A = data;
            return responseData;
        })
        .catch((err) => {
        return Promise.reject(err);
    })
};

export default callApi;
