// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://mobile.letaskono-zwaj.com/api/v1',
    // baseURL: 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});


export default axiosInstance;
