import axios from 'axios';
import { Toast } from 'antd-mobile';
import Nprogress from 'nprogress';

// 请求拦截器
axios.interceptors.request.use((config) => {
  // 设置进度条
  Nprogress.start();
  return config;
});
// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    //结束进度条
    Nprogress.done();
    return response.data;
  },
  (err) => {
    Nprogress.done();
    Toast.fail(err.message);
    return new Promise(() => {});
  }
);

export default axios;
