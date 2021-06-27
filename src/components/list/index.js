import React, { Component } from 'react';
import './index.css';
import Item from '../item';

export default class List extends Component {
  render() {
    // 接收list传过来的值
    const { todos } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} deleteTodo={this.props.deleteTodo} updateDone={this.props.updateDone} />;
        })}
      </ul>
    );
  }
}
