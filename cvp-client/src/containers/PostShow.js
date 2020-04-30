import React, { Component } from 'react'

export class PostShow extends Component {
  state = {
    post: {}
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    fetch(`http://localhost:3001/posts/${id}`)
      .then(resp => resp.json())
      .then(post => this.setState({ post }))
  }

  render() {
    return (
      <div>
        <h3>{this.state.post.title}</h3>
        <br />
        <p>{this.state.post.content}</p>
      </div>
    )
  }
}

export default PostShow
