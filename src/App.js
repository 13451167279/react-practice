import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                <a className="list-group-item active" href="./home.html">
                  Home
                </a>
                <a className="list-group-item" href="./about.html">
                  About
                </a>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Home></Home>
                  <About></About>
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
