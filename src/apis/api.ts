/* eslint-disable no-undef */
import axios from 'axios'
import NProgress from 'nprogress';

// const base_url = import.meta.env.VITE_SOCKET_URL
// console.log('base url', base_url)

export default () => {
    const api = axios.create({
        baseURL: import.meta.env.VITE_SOCKET_URL
    });
    api.interceptors.request.use(config => {
        NProgress.start()
        return config
    })
    api.interceptors.response.use(response => {
        NProgress.done()
        return response
    })
    return api;
}
