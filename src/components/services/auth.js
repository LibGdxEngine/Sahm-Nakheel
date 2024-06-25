// services/auth.js
import axiosInstance from '../axiosInstance';

export const createUser = async (userData) => {
    try {
        const response = await axiosInstance.post('user/signup/', userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const getToken = async (credentials) => {
    try {
        const response = await axiosInstance.post('/user/login/', credentials);
        return response.data;
    } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
    }
};

export const getUser = async (token) => {
    try {
        const response = await axiosInstance.get('/profiles/me/', {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};


export const updateUser = async (token, data) => {
    try {
        const response = await axiosInstance.put('/user/account/modify/',data, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export const activateAccount = async (code) => {
    const response = await api.post('/api/v1/user/activate/', {code});
    return response.data;
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