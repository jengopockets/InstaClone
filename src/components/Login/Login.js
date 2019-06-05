import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleLogin = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <form className="login">
                <h2>InstaClone</h2>
                <div>Login</div>
                <div className="login-user">
                    <input type="user" name="username" placeholder="UserName" value={this.state.username} onChange={this.handleInput} />
                </div>
                <div className="login-password">
                    <input type="pass" placeholder="What is Thine Password?" name="password" value={this.state.password} onChange={this.handleInput} />
                
                    <br />
                    <button onClick={this.handleLogin}>
                        Submit
                    </button>
                </div>

            </form>
        );
    }
}

export default Login;