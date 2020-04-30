import React from 'react'
import Container from './Container';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="green darken-3">
      <Container>
        <Link to="/">Home</Link>
        <ul className="right">
          <li><Link to="/posts">Post</Link></li>
          <li><Link to="/posts/new">Create Post</Link></li>
        </ul>
      </Container>
    </nav>
  )
}
