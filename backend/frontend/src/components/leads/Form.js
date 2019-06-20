import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    };

    static PropTypes = {
        addLead: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name] : e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { firstName, lastName, userName, email, password } = this.state;
        const user = { firstName, lastName, userName, email, password }
        this.props.addLead(user)
        console.log('Submitted');
    };

    render() {
        const { firstName, lastName, userName, email, password } = this.state;  
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add User</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control" type="text" name="firstName" onChange={this.onChange} value={firstName}/> 
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="form-control" type="text" name="lastName" onChange={this.onChange} value={lastName}/> 
                    </div>
                    <div className="form-group">
                        <label>Userame</label>
                        <input className="form-control" type="text" name="userName" onChange={this.onChange} value={userName}/> 
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" onChange={this.onChange} value={email}/> 
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="text" name="password" onChange={this.onChange} value={password}/> 
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button> 
                    </div>
                </form>
                
            </div>
        )
    }
}

export default connect(null, { addLead })(Form)