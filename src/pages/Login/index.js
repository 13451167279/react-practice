import React, { Component } from 'react';
import { NavBar, InputItem, Button, Toast } from 'antd-mobile';

import qq from './imgs/qq.png';
import github from './imgs/github.png';
import wechat from './imgs/wechat.png';

import { phoneReg, verifyCodeReg } from '../../utils/reg';
//导入api请求
import { reqVerifyCode, reqLogin } from '../../api';

import './index.less';
export default class Login extends Component {
  state = {
    phone: '', //手机号
    verifyCode: '', //验证码
    time: 60, //倒计时
    isClick: true, //是否可以点击
  };

  // 获取用户输入的数据
  saveData = (type) => {
    return (value) => {
      // 验证输入的手机号是否符合要求
      if (type === 'phone' && phoneReg.test(value)) {
        return this.setState({ [type]: value });
      }
      if (type === 'verifyCode' && verifyCodeReg.test(value)) {
        return this.setState({ [type]: value });
      }
      return this.setState({ [type]: '' });
    };
  };
  // 或取验证码
  getVerifyCode = async () => {
    const { phone, isClick } = this.state;

    if (!isClick) return;
    if (!phone) {
      return Toast.fail('手机号格式不正确', 1);
    }
    //设置获取验证码的按钮状态为false
    this.setState({ isClick: false });
    // 倒计时
    this.timer = setInterval(() => {
      let { time } = this.state;
      time--;
      // 倒计时结束时，清空定时器，重置获取验证码按钮状态，以及倒计时
      if (time <= 0) {
        clearInterval(this.timer);
        return this.setState({
          isClick: true,
          time: 60,
        });
      }
      this.setState({ time });
    }, 10);

    // 发送请求获取验证码
    const result = await reqVerifyCode(phone);
    console.log(result);
    Toast.success('验证码发送成功');
  };

  login = async () => {
    //获取手机号，验证码
    const { phone, verifyCode } = this.state;
    if (!(phone && verifyCode)) return Toast.fail('请检查手机号或验证码格式', 2);
    const result = await reqLogin(phone, verifyCode);
    const { code, message } = result;
    if (code === 20000) {
      Toast.success('登录成功！');
      this.props.history.push('/usercenter');
    } else Toast.fail(message);
  };
  loginGithub = () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=6333111045394ed42a3e';
  };

  // 不进行定时器清除，将报以警告信息
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { time, isClick, phone, verifyCode } = this.state;
    return (
      <div className="login">
        <NavBar mode="light">手机登录</NavBar>
        <InputItem placeholder="请输入手机号" clear onChange={this.saveData('phone')}></InputItem>
        <div className="verify-input">
          <InputItem placeholder="请输入验证码" clear onChange={this.saveData('verifyCode')}></InputItem>
          <button className="verify-btn" onTouchEnd={this.getVerifyCode} style={{ color: isClick ? '#f42403' : '#a5a5a5' }}>
            获取验证码{isClick ? '' : `(${time}s)`}
          </button>
        </div>
        <Button type="primary" onTouchEnd={this.login} disabled={phone && verifyCode ? false : true}>
          登录
        </Button>
        <footer className="footer">
          <span className="other-login">其他登录方式</span>
          <div className="login-type">
            <img src={github} alt="" onTouchEnd={this.loginGithub}></img>
            <img src={qq} alt=""></img>
            <img src={wechat} alt=""></img>
          </div>
          <span className="footer-text">
            未注册的手机号，验证后会自动创建硅谷账号，登录即代表您同意：
            <a href="http://www.atguigu.com">《硅谷隐私政策》</a>
          </span>
        </footer>
      </div>
    );
  }
}
