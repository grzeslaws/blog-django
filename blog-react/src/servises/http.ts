import { getHeadersAuthorization, getTokenFromLocalStorage } from "./storage";

export const http = async (url: string, data: {} | null = null) => {
    let options: any = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (getTokenFromLocalStorage()) {
        options.headers = Object.assign(options.headers, { Authorization: getHeadersAuthorization() });
    }

    if (data) {
        options = {
            method: "POST",
            body: JSON.stringify(data),
            ...options,
        };
    }

    try {
        const fetchData = await fetch(url, options);
        if (fetchData.status === 204) {
            return fetchData;
        }
        return fetchData.json();
    } catch (e) {
        throw { message: "Network error", status: 500 };
    }
};
