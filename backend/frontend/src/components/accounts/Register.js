import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
          this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
        } else {
            const newUser = {
                username,
                password,
                email
            };
            this.props.register(newUser);
        }
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, email, password, password2 } = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Register</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Userame</label>
                        <input className="form-control" type="text" name="username" onChange={this.onChange} value={username}/> 
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" onChange={this.onChange} value={email}/> 
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" name="password" onChange={this.onChange} value={password}/> 
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input className="form-control" type="password" name="password2" onChange={this.onChange} value={password2}/> 
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
  
export default connect(mapStateToProps, { register, createMessage })(Register);