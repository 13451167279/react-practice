import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
    students: [],
    cars: [],
  };
  componentDidMount() {
    this.getData();
  }
  /**
   * 代理方法，前端解决
   *  1、浏览器插件，cros unblock
   *  2、package.json中添加 "proxy":"localhost:port"
   *  3、proxy  编写setupProxy.js
   */
  getData = () => {
    axios.get('/api/students').then(
      (data) => {
        this.setState({ students: [...data.data] });
      },
      (err) => {
        console.log(err);
      }
    );
    axios.get('/api1/cars').then(
      (data) => {
        this.setState({ cars: [...data.data] });
      },
      (err) => {
        console.log(err);
      }
    );
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.students.map((student) => {
            return (
              <li key={student.id}>
                姓名为：{student.name} 年龄是：{student.age}
              </li>
            );
          })}
          {this.state.cars.map((car) => {
            return (
              <li key={car.id}>
                车型为：{car.name} 价格：{car.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
