import React, { Component } from 'react';
// import { Button, DatePicker } from 'antd';
// import { Button } from 'antd-mobile';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './config/router';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Switch>
          {routes.map((routeObj) => {
            return <Route key={routeObj.path} path={routeObj.path} component={routeObj.component}></Route>;
          })}
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
