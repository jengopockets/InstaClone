import React from 'react';
import PostsPage from './components/PostsContainer/PostsPage';
import withAuthenticate from './authentication/Authenticate';
import Login from './components/Login/Login';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

const App = () => <ComponentFromWithAuthenticate />;


export default App;

