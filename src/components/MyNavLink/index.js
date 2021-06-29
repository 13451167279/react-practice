import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class myNavLink extends Component {
  render() {
    // const { to, title } = this.props;
    const { to, children } = this.props;
    // console.log(this.props);
    return (
      // 使用参数传递形式
      // <NavLink className="list-group-item" activeClassName="myactive" to={to}>
      //   {title}
      // </NavLink>
      // 标签体内容属性传递
      <NavLink className="list-group-item" activeClassName="myactive" to={to}>
        {children}
      </NavLink>
    );
  }
}
