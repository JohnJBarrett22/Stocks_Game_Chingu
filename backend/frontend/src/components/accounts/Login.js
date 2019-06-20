import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('submit')
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, password } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Userame</label>
                        <input className="form-control" type="text" name="username" onChange={this.onChange} value={username}/> 
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="text" name="password" onChange={this.onChange} value={password}/> 
                    </div>
                </form>
            </div>
        )
    }
}

export default Login