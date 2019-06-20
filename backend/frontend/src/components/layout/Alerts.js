import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, alert } = this.props;
        if(error !== prevProps.error){
            if(error.msg.firstName){
                alert.error(`First Name: ${error.msg.firstName.join()}`);
            } if(error.msg.lastName){
                alert.error(`Last Name: ${error.msg.lastName.join()}`);
            } if(error.msg.userName){
                alert.error(`Username: ${error.msg.userName.join()}`);
            } if(error.msg.email){
                alert.error(`Email: ${error.msg.email.join()}`);
            } if(error.msg.password){
                alert.error(`Password: ${error.msg.password.join()}`);
            }
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors
})

export default connect(mapStateToProps)(withAlert()(Alerts));