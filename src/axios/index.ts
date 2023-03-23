import axios, {AxiosError} from 'axios';
import {AuthResponse} from '../models/models';

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
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
            const res = await axios.post<AuthResponse>(`${process.env.REACT_APP_BASE_URL}/auth/refresh`, {
                refreshToken: localStorage.getItem('refreshToken'),
                accessToken: localStorage.getItem('accessToken'),
                email: localStorage.getItem('email'),
                id: localStorage.getItem('id')
            });
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            localStorage.setItem('email', res.data.email);
            localStorage.setItem('id', res.data.id);
            return axiosApi.request(originalRequest);
        } catch (e) {
            console.log('Пользователь не авторизован');
        }
    }
    throw error;
});

export default axiosApi;