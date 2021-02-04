import { connect } from 'react-redux'
import React from 'react';
import Table from './Table';

class TableContainer extends React.Component {
    render() {
        return <Table {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {} )(TableContainer)