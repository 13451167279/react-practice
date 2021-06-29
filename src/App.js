import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';
// import Test from './pages/Test';
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
                {/*
                // 使用A标签
                <a className="list-group-item active" href="/home">
                  Home
                </a>
                <a className="list-group-item" href="/about">
                  About
                </a> */}
                {/*
                  // 使用Link
                <Link className="list-group-item" to="/home">
                  Home
                </Link>
                <Link className="list-group-item" to="/about">
                  About
                </Link> */}

                {/* 使用NavLink 可以设置高亮*/}
                {/* <NavLink className="list-group-item" activeClassName="active" to="/home"> */}
                {/* 自定义active样式 */}
                {/* <NavLink className="list-group-item" activeClassName="myactive" to="/home">
                  Home
                </NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/about">
                  About
                </NavLink> */}

                {/* 对NavLink二次封装 参数传递 */}
                {/* <MyNavLink to="/home" title="Home"></MyNavLink>
                <MyNavLink to="/about" title="About"></MyNavLink> */}
                {/* 二次封装标签内容属性的传递 */}
                {/* <MyNavLink to="/mypath/home">Home</MyNavLink>
                <MyNavLink to="/mypath/about">About</MyNavLink> */}

                {/* 路径的模糊匹配 与精确匹配*/}
                <MyNavLink to="/home">Home</MyNavLink>
                <MyNavLink to="/about">About</MyNavLink>
                {/* 以about开头匹配可匹配的到 */}
                <MyNavLink to="/about/a/b">About</MyNavLink>
                {/* 以a开头匹配则匹配不到 */}
                {/* <MyNavLink to="/a/about/b">About</MyNavLink> */}
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 定义路由，（路由表） */}
                  <Switch>
                    {/* <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route> */}

                    {/* 精确匹配 */}
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    {/* 重定向 当路径不匹配的时候就重定向，一般放在所以路由的最后*/}
                    <Redirect to="/home"></Redirect>

                    {/* 修改路由链接路径 */}
                    {/* <Route path="/mypath/home" component={Home}></Route>
                    <Route path="/mypath/about" component={About}></Route> */}
                    {/* 使用switch  与使用switch的测试*/}
                    {/* <Route path="/about" component={Test}></Route> */}
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
