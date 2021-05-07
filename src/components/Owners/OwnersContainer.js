import { connect } from 'react-redux'
import React from 'react';
import { addTableOwnerItem, deleteOwnerItem, updateUser } from '../../api/api';
import Owners from './Owners';



class OwnersContainer extends React.Component {
    render() {
        return <Owners {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        // usersTableItems: state.usersReducer.users,
        ownersTableItems: state.ownersReducer.owners,
        isAuth: state.authReducer.isAuth
        // currentPage: state.tableItemsReducer.currentPage,
        // categoryId: state.categoriesReducer.currentCategoryId,
        // searchString: state.tableItemsReducer.search
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTableOwnerItem: (id) => dispatch(deleteOwnerItem(id)),
        // updateTableUserItem: (user) => dispatch(updateUser(user)),
        addTableOwnerItem: (item) => dispatch(addTableOwnerItem())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OwnersContainer)