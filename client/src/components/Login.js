import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login',
            this.state.credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected/BubblePage')
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
              <h1>Log into your Bubble Page!</h1>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="username"
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password"
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;