import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
  clearAllTodos = () => {
    this.props.deleteAllTodos();
  };
  selectAllTodos = (e) => {
    this.props.updateAllDone(e.target.checked);
    // console.log(e.target.checked);
  };
  checkTodos = () => {
    const { todos } = this.props;
    return todos.filter((todo) => todo.done).length;
  };

  render() {
    const { todos } = this.props;
    return (
      <div className="todo-footer">
        <label>
          {/* {  已经完成的长度等于任务数量的长度} */}
          <input type="checkbox" onChange={this.selectAllTodos} checked={todos.length === this.checkTodos() && todos.length > 0} />
        </label>
        <span>
          <span>已完成{this.checkTodos()}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllTodos}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
