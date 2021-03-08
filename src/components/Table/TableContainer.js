import { connect } from 'react-redux'
import React from 'react';
import Table from './Table';



class TableContainer extends React.Component {
    render() {
        return <Table {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        tableItems: state.tableItemsReducer.items,
        currentPage: state.tableItemsReducer.currentPage,
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, {})(TableContainer)