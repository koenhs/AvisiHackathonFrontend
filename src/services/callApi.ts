const BASE_URL = "http://localhost:8080/api/";

type DataType<T> = Record<string, T> | T;

const callApi = async <T>(
    endpoint: string,
    data: DataType<T> = {} as DataType<T>,
    method: string = 'GET'
): Promise<Response> => {
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

    return await fetch(url, options);
};
