import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';
import { get } from 'lodash';
import { API_URL } from '../config';

const axiosConfig: AxiosRequestConfig = {
    baseURL: API_URL,
    timeout: 240 * 1000,
    responseType: 'json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
};

const client: AxiosInstance = axios.create(axiosConfig);

// 401 handler for graceful unauthenticated handling
client.interceptors.response.use(response => response, rejected => {
    const status = get(rejected, 'response.status', false);
    if (status === 401) {
        // redirect to login or maybe dispatch an action if we want to pass in our redux store
        Cookie.remove('token'); // delete a JWT cookie or something of that sort
        const redirect = encodeURIComponent(window.location.href);
        window.location.href = `/login?redirect=${redirect}`;
    }
});

export default client;
