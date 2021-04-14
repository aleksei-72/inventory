import { connect } from 'react-redux'
import React from 'react';
import Table from './Table';
import { deleteItem } from '../../api/api';
import { updateItem } from './../../api/api';



class TableContainer extends React.Component {
    render() {
        return <Table {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        tableItems: state.tableItemsReducer.items,
        currentPage: state.tableItemsReducer.currentPage,
        isAuth: state.authReducer.isAuth,
        categoryId: state.categoriesReducer.currentCategoryId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTableItem: (id) => dispatch(deleteItem(id)),
        updateTableItem: (item) => dispatch(updateItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)