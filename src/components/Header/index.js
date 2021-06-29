import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    // console.log('我是一般组件', this.props);
    return <h2>React Router Demo</h2>;
  }
}

// 将一般组件转为路由组件
// 高阶组件
export default withRouter(Header);
