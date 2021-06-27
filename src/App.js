import React, { Component } from 'react';

import Header from './components/header';
import Footer from './components/footer';
import List from './components/list';

import './App.css';
class App extends Component {
  state = {
    todos: [
      { id: '001', name: '张三', done: true },
      { id: '002', name: '李四', done: false },
      { id: '003', name: '王五', done: true },
      { id: '004', name: '李二', done: false },
    ],
  };
  // 添加数据修改state
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [...todos, todoObj];
    this.setState({ todos: newTodos });
  };
  // 删除数据，修改state
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  };
  // 更新选中的项，修改done的值
  updateDone = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.done = done;
      return todo;
    });
    this.setState({ todos: newTodos });
  };
  // 全选 跟新列表
  updateAllDone = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todos: newTodos });
  };

  // 删除选择的所以任务
  deleteAllTodos = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.done);
    this.setState({ todos: newTodos });
  };

  render() {
    //将state  解构赋值
    const { todos } = this.state;
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={todos} deleteTodo={this.deleteTodo} updateDone={this.updateDone} />
            <Footer deleteAllTodos={this.deleteAllTodos} updateAllDone={this.updateAllDone} todos={todos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
