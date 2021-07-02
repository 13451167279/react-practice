import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
class App extends Component {
  render() {
    return (
      <div id="app">
        <Button type="primary">Primary Button</Button>
        <DatePicker></DatePicker>
      </div>
    );
  }
}

export default App;
