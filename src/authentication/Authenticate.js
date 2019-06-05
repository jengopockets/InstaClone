import React, { Component } from 'react';
import PostsPage from "../components/PostsContainer/PostsPage"
import Login from "../components/Login/Login";

const withAuthenticate = (app) =>
    class extends React.Component {
        render() {
            return <app />;
        }
    };
    

export default withAuthenticate;