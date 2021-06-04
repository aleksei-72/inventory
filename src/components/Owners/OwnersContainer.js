import { connect } from 'react-redux'
import React from 'react';
import { addTableOwnerItem, deleteOwnerItem, updateOwner } from '../../api/api';
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
        isAuth: state.authReducer.isAuth,
        userRole: state.authReducer.currentUser.role
        // currentPage: state.tableItemsReducer.currentPage,
        // categoryId: state.categoriesReducer.currentCategoryId,
        // searchString: state.tableItemsReducer.search
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTableOwnerItem: (id) => dispatch(deleteOwnerItem(id)),
        updateTableOwnerItem: (owner) => dispatch(updateOwner(owner)),
        addTableOwnerItem: (item) => dispatch(addTableOwnerItem())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OwnersContainer)