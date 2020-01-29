import React, { Component } from 'react';
import GitHubLogin from './GitHubLogin';
import axios from 'axios';
import {  withRouter } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            access_token: "",
            username: ""
        }
    }
    onSuccess = response => {
        axios.post(`https://github.com/login/oauth/access_token`, null, {
            headers: {
                Accept: "application/json",
            },
            params: {
                client_id: "20f95657e45afdd18033",
                client_secret: "29a4e6ce2d71101783ff392cf803f7e923e00f54",
                code: response.code
            }
        })
            .then(data => {
                axios.get(`https://api.github.com/user`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${data.data.access_token}`
                    }
                }).then(value => {
                    this.setState({ username: value.data.login }, () =>
                        this.props.history.push("/dashboard", { username: this.state.username })
                    )
                }
                )
                this.setState({ access_token: data.data.access_token })
                localStorage.setItem('access_token', data.data.access_token)
            }
            )
            .catch(err => console.warn(err));
    };
    onFailure = response => console.error(response);

    componentDidMount() {
        localStorage.removeItem("access_token")
    }

    render() {

        return (
            <GitHubLogin
                clientId="20f95657e45afdd18033"
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
            />
        );
    }
}

export default withRouter(Login);
