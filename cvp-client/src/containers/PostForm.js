import React, { Component } from 'react'

export class PostForm extends Component {

  state = {
    title: "",
    content: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    let strongParams = {
      post: {
        title: this.state.title,
        content: this.state.content
      }
    }

    fetch('http://localhost:3001/posts', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams)
    })
      .then(resp => resp.json())
      .then(post => {
        this.props.history.push('/posts')
      })
  }

  render() {
    return (
      <React.Fragment>
        <h5>Create Post</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="" cols="30" rows="10" className="materialize-textarea" value={this.state.content} onChange={this.handleChange}></textarea>
          </div>

          <input type="submit" value="Create Post" className="btn green" />
        </form>
      </React.Fragment>
    )
  }
}

export default PostForm
