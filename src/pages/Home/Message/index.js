import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Detail from './Detail';

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '001', title: '消息1' },
      { id: '002', title: '消息2' },
      { id: '003', title: '消息3' },
    ],
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
              </li>
            );
          })}
        </ul>
        <hr />
        <Switch>
          {/* 设置params参数 */}
          <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
          {/* search 设置 */}
          <Route path="/home/message/detail/" component={Detail}></Route>
        </Switch>
      </div>
    );
  }
}
