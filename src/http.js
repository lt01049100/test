import config from '../config'
import axios from 'axios'
import store from './store/store'
import * as types from './store/types'
import router from './router'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = config.host + config.serverRoot;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = true;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        // if(!localStorage.getItem("passCheck")) {
        //     // if(!isWhite) {
        //         if(!store.state.token) {
        //             router.replace('/login')
        //             return response
        //         }
        //         response.headers['token'] = store.state.token || ''
    
        //     // }
        // }
        return response;
    },
    error => {
        if (error.response) {
            console.log('error.response.status: '+error.response.status)
            switch (error.response.status) {
                case 404:
                    // 401 清除token信息并跳转到登录页面
                    // store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

export default axios;
