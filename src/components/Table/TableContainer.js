import { connect } from 'react-redux'
import React from 'react';
import Table from './Table';
import { getTableItems } from '../../reducers/tableItems';


class TableContainer extends React.Component {
    componentDidMount() {
        this.props.getTableItems()
    }
    render() {
        return <Table {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        tableItems: state.tableItemsReducer,
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, {getTableItems})(TableContainer)