import axios, { InternalAxiosRequestConfig } from 'axios'
import { baseURL } from './config'

interface InternalAxiosRequestConfigToken extends InternalAxiosRequestConfig {}

const request = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

request.interceptors.request.use((config: InternalAxiosRequestConfigToken) => {
    const isServer = typeof window === 'undefined'

    // if (isServer) {
    //     if (typeof config.sub === 'undefined') return config
    //     config.headers.Authorization = `bearer ${config.sub}`
    // } else {
    //     const sub = window.localStorage.getItem('sub')
    //     if (!sub) return config
    //     config.headers.Authorization = `bearer ${sub}`
    // }
    return config
})

// request.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config
//         const status = error.response?.status
//         return Promise.reject(error)
//     },
// )

export default request
