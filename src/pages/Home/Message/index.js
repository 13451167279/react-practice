import React, { Component } from 'react';
import { Route, Link, Switch, Prompt } from 'react-router-dom';

import Detail from './Detail';

export default class Message extends Component {
  state = {
    isGoBack: false,
    messageArr: [
      { id: '001', title: '消息1' },
      { id: '002', title: '消息2' },
      { id: '003', title: '消息3' },
    ],
  };
  // 是否离开
  blocking = () => {
    console.log(1);
    this.setState({ isGoBack: !this.state.isGoBack });
  };

  replaceShow = (id, title) => {
    // replace跳转+params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);

    this.props.history.replace('/home/message/detail', { id, title });
  };

  pushShow = (id, title) => {
    // push跳转+params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`);

    this.props.history.push('/home/message/detail', { id, title });
  };
  forword = () => {
    this.props.history.goForward();
  };
  back = () => {
    this.props.history.goBack();
  };
  go = () => {
    this.props.history.go(-2);
  };

  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((mes) => {
            return (
              <li key={mes.id}>
                {/* params参数传参 */}
                {/* <Link to={`/home/message/detail/${mes.id}/${mes.title}`}>{mes.title}</Link> */}
                {/* searc参数传递 */}
                {/* <Link to={`/home/message/detail/?id=${mes.id}&title=${mes.title}`}>{mes.title}</Link> */}
                <Link
                  // replace// replace效果
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: mes.id, title: mes.title },
                  }}
                >
                  {mes.title}
                </Link>
                <button className="btn btn-primary" onClick={() => this.pushShow(mes.id, mes.title)}>
                  push查看
                </button>
                <button className="btn btn-primary" onClick={() => this.replaceShow(mes.id, mes.title)}>
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        <Switch>
          {/* 设置params参数 */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route>s */}
          {/* search 设置 */}
          <Route path="/home/message/detail/" component={Detail}></Route>
        </Switch>
        <button className="btn btn-primary" onClick={this.forword}>
          前进
        </button>
        <button className="btn btn-primary" onClick={this.back}>
          返回
        </button>
        <button className="btn btn-primary" onClick={this.go}>
          go
        </button>
        {this.state.isGoBack.toString()}
        {/* <Prompt when={this.state.isGoBack} message={(location) => `你确认想要去 ${location.pathname}`} /> */}
        <Prompt when={this.state.isGoBack} message={(location) => `你确认想要去 ${location.pathname}`}/>
        <button className="btn btn-danger" onClick={this.blocking}>
          阻止离开
        </button>
      </div>
    );
  }
}
