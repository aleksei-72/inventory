import { connect } from 'react-redux'
import React from 'react';
import Login from './Login';
import { withRouter } from 'react-router';

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default withRouter( connect(mapStateToProps, {})(LoginContainer))