import axios from "axios";

export default axios.create({
    // withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json',
    },
    // withCredentials: true,
});

axios.interceptors.request.use((config) => {
    config.headers.Authorization= `Bearer ${localStorage.getItem('token')}`;
    return config;
});