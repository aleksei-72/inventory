import { connect } from 'react-redux'
import React from 'react';
import Categories from './Categories';
import { addCategoriesItem, addTableItem, deleteCategoriesItem, getItems, updateCategoriesItem } from './../../api/api';


class CategoriesContainer extends React.Component {
    render() {
        return <Categories {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        tableItems: state.tableItemsReducer.items,
        categoriesItems: state.categoriesReducer.categories,
        roomsItems: state.tableItemsReducer.rooms,
        ownersTableItems: state.ownersReducer.owners,
        categoryId: state.categoriesReducer.currentCategoryId,
        currentUser: state.authReducer.currentUser,
        searchString: state.tableItemsReducer.search
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCategory: (id) => dispatch(deleteCategoriesItem(id)),
        updateCategory: (item) => dispatch(updateCategoriesItem(item)),
        addCategory: () => dispatch(addCategoriesItem()),
        addTableItem: () => dispatch(addTableItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)