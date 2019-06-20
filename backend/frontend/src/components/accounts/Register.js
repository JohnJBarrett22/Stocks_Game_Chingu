import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('submit')
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, email, password, password2 } = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Userame</label>
                        <input className="form-control" type="text" name="username" onChange={this.onChange} value={username}/> 
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" name="email" onChange={this.onChange} value={email}/> 
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="text" name="password" onChange={this.onChange} value={password}/> 
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="password2" onChange={this.onChange} value={password2}/> 
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
