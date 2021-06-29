import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';
class App extends Component {
  render() {
    return (
      <div id="app">
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <Header></Header>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 路径的模糊匹配 与精确匹配*/}
                <MyNavLink to="/home">Home</MyNavLink>
                <MyNavLink to="/about">About</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 定义路由，（路由表） */}
                  <Switch>
                    {/* 精确匹配 */}
                    {/* <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route> */}
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    {/* 重定向 当路径不匹配的时候就重定向，一般放在所以路由的最后*/}
                    <Redirect to="/home"></Redirect>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
