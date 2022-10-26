import axios from 'axios';
import { backendLink } from '../config';
import store from '../store';

const axiosInstance = axios.create({
    baseURL: backendLink
});

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.token;

    config.params = config.params || {};
    config.headers['Authorization'] = `Bearer ${token}`

    return config;
});

export default axiosInstance;
