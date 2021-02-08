import { connect } from 'react-redux'
import React from 'react';
import Header from './Header';


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(HeaderContainer)