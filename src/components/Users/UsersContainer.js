import { connect } from 'react-redux'
import React from 'react';
import Users from './Users';
import { addTableUserItem, deleteUserItem, updateUser, updateUserPassword } from './../../api/api';



class UsersContainer extends React.Component {
    render() {
        return <Users {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        usersTableItems: state.usersReducer.users,
        isAuth: state.authReducer.isAuth
        // currentPage: state.tableItemsReducer.currentPage,
        // categoryId: state.categoriesReducer.currentCategoryId,
        // searchString: state.tableItemsReducer.search
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTableItem: (id) => dispatch(deleteUserItem(id)),
        updateTableUserItem: (user) => dispatch(updateUser(user)),
        updateTableUserPassword: (user) => dispatch(updateUserPassword(user)),
        addTableUserItem: (item) => dispatch(addTableUserItem())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)