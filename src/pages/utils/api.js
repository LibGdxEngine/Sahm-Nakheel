import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000', // Replace with your API base URL
});

export const login = async (email, password) => {
    const response = await api.post('/api/v1/user/login/', {email, password});
    return response.data;
};

export const createAccount = async (firstName, lastName, email, password) => {

    return await api.post('/api/v1/user/signup/', {
        "first_name": firstName,
        "last_name": lastName,
        "username": email,
        email,
        password
    }).catch((error) => {
        if (error.response) {

            const errors = {};
            Object.entries(error.response.data).forEach(([key, messages]) => {
                errors[key] = messages[0]; // Take the first error message for each field
            });

            return { errors };
        } else {

            // ... (handle other error types)
            return error.response.data;
        }
    });
};

export const activateAccount = async (code) => {
    const response = await api.post('/api/v1/user/activate/', {code});
    return response.data;
};

export const me = async (token) => {
    const response = await api.get('/api/v1/user/me/', {
        headers: {
            Authorization: `Token ${token}`,
        },
    });
    return response.data;
};

export const logout = () => {
    document.cookie = `csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

export async function fetchApi(url, options = {}) {
    try {
        const response = await fetch(url, {
            method: options.method || 'GET',
            headers: options.headers,
            body: options.body ? JSON.stringify(options.body) : null,
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw to allow for error handling where the function is used
    }
}