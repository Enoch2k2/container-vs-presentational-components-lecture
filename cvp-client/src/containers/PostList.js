import React, { Component } from 'react'
import PostCard from '../components/PostCard';

export class PostList extends Component {
  render() {
    const posts = this.props.posts.map((post, i) => (
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
