import { connect } from 'react-redux'
import React from 'react';
import Table from './Table';
import { deleteItem } from '../../api/api';



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
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTableItem: (id) => dispatch(deleteItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)