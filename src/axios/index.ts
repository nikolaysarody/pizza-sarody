import axios from "axios";

const axiosApi = axios.create({
    // withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL,
    // headers: {
    //     'Access-Control-Allow-Origin' : '*',
    //     'Content-Type': 'application/json',
    // },
    withCredentials: true,
});

axiosApi.interceptors.request.use((config) => {
    config.headers.Authorization= `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default axiosApi;