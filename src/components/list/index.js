import React, { Component } from 'react';
import './index.css';
import PubSub from 'pubsub-js';

export class List extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoding: false, //加载中
    err: '', //错误信息
  };
  componentDidMount() {
    this.psEvent = PubSub.subscribe('pubsubEvent', (msg, data) => {
      this.setState(data);
    });
  }
  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.psEvent);
  }

  render() {
    const { users, isLoding, isFirst, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>Hellow please input search word</h2>
        ) : isLoding ? (
          'Loding'
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err.toString()}</h2>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.url} target="_blank" rel="noreferrer">
                  <img src={user.avatar_url} alt="thumb" style={{ width: 100 + 'px' }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default List;
