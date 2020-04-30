import React, { Component } from 'react'
import PostCard from '../components/PostCard';

export class PostList extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/posts')
      .then(resp => resp.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    const posts = this.state.posts.map((post, i) => (
      <PostCard key={i} post={post} />
    ))
    return (
      <React.Fragment>
        <h5>Posts</h5>
        {posts}
      </React.Fragment>
    )
  }
}

export default PostList
