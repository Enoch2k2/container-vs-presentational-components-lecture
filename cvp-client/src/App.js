import React, { Component } from 'react';
import PostForm from './containers/PostForm';
import PostList from './containers/PostList';
import Container from './components/Container';
import Header from './components/Header';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/posts')
      .then(resp => resp.json())
      .then(posts => this.setState({ posts }))
  }

  addPost = post => {
    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  render() {

    return (
      <Container>
        <Header title={"Container VS Presentational"} />
        <PostForm addPost={this.addPost} />
        <PostList posts={this.state.posts} />
      </Container>
    );
  }
}

export default App;
