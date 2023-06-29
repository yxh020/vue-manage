import axios from 'axios'
import { BASE } from '@/config/url'

//创建axios实例
let service = axios.create({
    baseURL: BASE
})

service.interceptors.request.use(
    config =>{
        return config
    },
    err =>{
        return Promise.reject(err)
    }
)

service.interceptors.response.use(
    response =>{
        let res = response.data
        if(res.code != 0){
            console.error('接口报错了')
        }
        return Promise.resolve(res)
    },
    err => {
        return Promise.reject(err)
    }
)
export default service