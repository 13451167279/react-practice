import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export class Search extends Component {
  keyword = React.createRef();
  search = () => {
    const {
      current: { value: keyword },
    } = this.keyword;

    /*     axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (res) => {
        this.props.getUserList(res.data.items);
      },
      (err) => {
        console.log(err);
      }
    ); */

    PubSub.publish('pubsubEvent', {
      isFirst: false,
      isLoding: true,
    });

    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (res) => {
        PubSub.publish('pubsubEvent', {
          isLoding: false,
          users: res.data.items,
        });
      },
      (err) => {
        PubSub.publish('pubsubEvent', {
          isLoding: false,
          err,
        });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={this.keyword} />
          {/* <input type="text" placeholder="enter the name you search" ref={(c) => (this.keywordElement = c)} /> */}
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}

export default Search;
