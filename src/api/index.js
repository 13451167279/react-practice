//统一管理axios请求
import request from './request';

// digits 发送验证码     POST
// http://localhost:5000/login/digits
export const reqVerifyCode = (phone) => request.post('/login/digits', { phone });
// phone 手机号登录     //POST;
//localhost:5000/login/phone
export const reqLogin = (phone, code) => request.post('/login/phone', { phone, code });

// 验证用户是否登录   // POST
// http://localhost:5000/login/verify
export const reqVerifyToken = () => request.post('/login/verify');

// logout 退出登录    // POST
// http://localhost:5000/logout
export const reqLogout = (_id) => request.post('/logout', { _id });

// github oauth 登录  // GET
// http://localhost:5000/login/oauth/github
