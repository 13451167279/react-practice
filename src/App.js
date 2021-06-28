import React, { Component } from 'react';

import Search from './components/search';
import List from './components/list';

class App extends Component {
  state = {
    users: [],
  };
  getUserList = (userList) => {
    this.setState({ users: userList });
  };
  render() {
    return (
      <div id="app">
        <div className="container">
          <Search getUserList={this.getUserList} />
          <List users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
