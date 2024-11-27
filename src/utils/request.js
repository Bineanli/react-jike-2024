import axios from "axios"; 
import { getToken } from "./token";
//axios的封装，统一处理请求


//1.根域名配置
//2.超时时间配置
//3.请求拦截器配置/响应拦截器配置

const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout:5000,
})


// 添加请求拦截器
// 在发送请求之前做一些处理自定义的逻辑，比如设置 headers、token 等
request.interceptors.request.use((config)=> {
  //操作config注入token
  //1.获取本地存储的token
  //2.按照后端的格式要求做token的拼接

  const token = getToken()
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

    return config
  }, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器
//在响应返回客户端之前做一些处理，比如根据状态码做一些操作，比如 token 失效，重新登录等
request.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  }, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
})

export {request}