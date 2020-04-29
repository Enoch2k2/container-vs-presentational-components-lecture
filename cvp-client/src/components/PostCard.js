import React from 'react'

const PostCard = ({ post: { title, content } }) => {
  return (
    <div>
      <p>-------</p>
      <p><strong>{title}</strong></p>
      <p>{content}</p>
    </div>
  )
}

export default PostCard
