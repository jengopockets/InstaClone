import React, { Component } from 'react';
import PostsPage from './components/PostsContainer/PostsPage';
import withAuthenticate from './authentication/Authenticate';
import './App.css';

const ComponentFromWithAuthenticate = () => <div>< PostsPage/></div>;

class App extends Component {
  render() {
    return (
      <ComponentFromWithAuthenticate />
    ); 
  }
}


export default App;

