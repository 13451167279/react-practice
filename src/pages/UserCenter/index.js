import React, { Component } from 'react';
import { Toast, NavBar, Button } from 'antd-mobile';
import { reqVerifyToken,reqLogout } from '../../api/index';

export default class UserCenter extends Component {
  state = {
    avatar: '',
    phone: '',
    username: '',
    _id: '',
  };
  async componentDidMount() {
    const result = await reqVerifyToken();
    console.log(result);
    const { code, message, data } = result;
    if (code !== 20000) {
      Toast.fail(message);
      this.props.history.replace('/login');
    } else {
      const { avatar, phone, username } = data;
      this.setState({ avatar: avatar, phone: phone, username: username });
    }
  }
  logout = async () => {
    await reqLogout(this.state._id);
    this.props.history.replace('/login');
 }

  render() {
    return (
      <div>
        <NavBar mode="light">个人中心</NavBar>
        <img src={this.state.avatar} alt=""></img>
        <div className="user-name">昵称：{this.state.username}</div>
        <Button type="primary" onTouchEnd={this.logout}>
          退出
        </Button>
      </div>
    );
  }
}
