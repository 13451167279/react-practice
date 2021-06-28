import React, { Component } from 'react';
import './index.css';

export class List extends Component {
  render() {
    const { users, isLoding, isFirst, err } = this.props;
    return (
      <div className="row">
        {isFirst ? (
          <h2>Hellow please input search word</h2>
        ) : isLoding ? (
          'Loding'
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err.toString()}</h2>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.url} target="_blank" rel="noreferrer">
                  <img src={user.avatar_url} alt="thumb" style={{ width: 100 + 'px' }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default List;
