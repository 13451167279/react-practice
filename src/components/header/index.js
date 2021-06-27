import React from 'react';
import './index.css';
import { nanoid } from 'nanoid';

class Header extends React.Component {
  handleKeyUp = (e) => {
    const { keyCode, target } = e;
    if (keyCode !== 13) return;
    if (!target.value.trim()) {
      alert('输入不能为空');
      return;
    }
    const todoObj = { id: nanoid(), name: target.value.trim(), done: false };
    this.props.addTodo(todoObj);
  };

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp}  placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    );
  }
}
export default Header;
