import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostForm from './containers/PostForm';
import PostList from './containers/PostList';
import Container from './components/Container';
import Header from './components/Header';
import NavBar from './components/NavBar';
import PostShow from './containers/PostShow';

class App extends Component {

  render() {

    return (
      <Router>
        <NavBar />
        <Container>
          <Header title={"Intro To React Routing"} />
          <Switch>
            <Route
              exact path="/posts/new"
              render={routerProps => <PostForm {...routerProps} addPost={this.addPost} />}
            />
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/posts/:id" component={PostShow} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
