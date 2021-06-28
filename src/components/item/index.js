import React, { Component } from 'react';

export class Item extends Component {
  state = {
    mouse: false,
  };

  // 鼠标移入移出事件
  handlemouse = (flag) => {
    this.setState({ mouse: flag });
  };
  // 删除事件
  handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      this.props.deleteTodo(id);
    }
  };
  // 点击复选框，改变复选框的状态
  update = (id) => {
    return (e) => {
      this.props.updateDone(id, e.target.checked);
    };
  };
  render() {
    // 接收item的传值
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li onMouseEnter={() => this.handlemouse(true)} onMouseLeave={() => this.handlemouse(false)} style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}>
        <label>
          <input type="checkbox" checked={done} onChange={this.update(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={() => this.handleDelete(id)} style={{ display: mouse ? 'block' : 'none' }}>
          删除
        </button>
      </li>
    );
  }
}

export default Item;
