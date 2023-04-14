import axios from 'axios';
import {AuthResponse} from '../models/auth/models';

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true
});

axiosApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

axiosApi.interceptors.response.use((config) => {
    return config;
}, async (error)  => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry && localStorage.getItem('refreshToken')) {
        originalRequest._isRetry = true;
        try {
            const res = await axios.get<AuthResponse>(`${process.env.REACT_APP_BASE_URL}/auth/refresh`, {withCredentials: true});
            localStorage.setItem('accessToken', res.data.accessToken);
            return axiosApi.request(originalRequest);
        } catch (e) {
            console.log('Пользователь не авторизован');
        }
    }
    throw error;
});

export default axiosApi;