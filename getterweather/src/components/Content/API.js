import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDemo extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=Atlanta`)
      .then(res => {
        weather = JSON.parse(body);
        console.log(weather);
        this.setState({ weather });
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <FetchDemo subreddit="reactjs"/>,
  document.getElementById('root')
);