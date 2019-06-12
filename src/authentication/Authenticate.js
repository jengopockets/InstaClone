import React, { Component } from 'react';
import PostsPage from "../components/PostsContainer/PostsPage"
import Login from "../components/Login/Login";

const withAuthenticate = FirstComponent => SecondComponent =>
    class extends Component {
        state = {
            loggedIn: false
        };

        componentDidMount() {
            if (localStorage.getItem('user')) {
                this.setState({
                    loggedIn: true
                });
            }
        }
        render() {
            return (
                <>
                {this.state.loggedIn ? (
                    <FirstComponent />
                ) : (
                    <SecondComponent />
                )}
            </>
            );
        }

    };
    

export default withAuthenticate;