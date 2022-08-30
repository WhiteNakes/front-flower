import axios from 'axios'
import cookie from "js-cookie";
import {Message, MessageBox} from "element-ui";
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8001', // api的base_url
  timeout: 20000 // 请求超时时间
})

service.interceptors.request.use(
  config => {
    //debugger
    if (cookie.get('user_token')) {
      config.headers['token'] = cookie.get('user_token');
    }
    return config
  },
  err => {
    return Promise.reject(err);
  })
// http response 拦截器
service.interceptors.response.use(
  response => {
    //debugger
      if (response.data.code == 28004) {
      console.log("response.data.resultCode是28004")
      // 返回 错误代码-1 清除ticket信息并跳转到登录页面
      //debugger
      window.location.href="/user/login"
      return
    }else{
      if (response.data.code !== 20000) {
        Message.error(response.data.message)
      } else {
        return response.data;
      }
    }
  },
  error => {
    Message.error("出错了")
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  });

export default service
// 登录请求
