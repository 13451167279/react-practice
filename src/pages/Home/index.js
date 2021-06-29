import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Message from './Message';
import News from './News';
import MyNavLink from '../../components/MyNavLink';

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news" className="list-group-item">
                News
              </MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message" className="list-group-item">
                message
              </MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/message" component={Message}></Route>
            <Route path="/home/news" component={News}></Route>
            <Redirect to="/home/message" />
          </Switch>
        </div>
      </div>
    );
  }
}
