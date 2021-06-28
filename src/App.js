import React, { Component } from 'react';

import Search from './components/search';
import List from './components/list';

class App extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoding: false, //加载中
    err: '', //错误信息
  };
  // getUserList = (userList) => {
  //   this.setState({ users: userList });
  // };

  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <div id="app">
        <div className="container">
          {/* <Search getUserList={this.getUserList} /> */}
          <Search updateAppState={this.updateAppState} />
          <List {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
