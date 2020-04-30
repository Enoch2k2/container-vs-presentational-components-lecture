import React from 'react'
import { Link } from 'react-router-dom';

const PostCard = ({ post: { title, content, id } }) => {
  return (
    <div>
      <p>-------</p>
      <p><strong><Link to={`/posts/${id}`}>{title}</Link></strong></p>
      <p>{content}</p>
    </div>
  )
}

export default PostCard
