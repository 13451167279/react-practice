import React, { Component } from 'react';

// import qs from 'querystring';

const detailData = [
  { id: '001', content: '我是消息一，你好中国' },
  { id: '002', content: '你好，尚硅谷' },
  { id: '003', content: '你好，自己' },
];
export default class Detail extends Component {
  render() {
    // 接收params参数
    // const { id, title } = this.props.match.params;

    // 接收search参数
    // const { id, title } = qs.parse(this.props.location.search.slice(1));

    //接收state参数
    const { id, title } = this.props.location.state;

    const re = detailData.find((detail) => detail.id === id);

    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{re.content}</li>
        </ul>
      </div>
    );
  }
}
