import React, { Component } from 'react';

import Header from './components/header';
import Footer from './components/footer';
import List from './components/list';

import './App.css';
class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header />
            <List />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
