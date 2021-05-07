import { connect } from 'react-redux'
import React from 'react';
import Categories from './Categories';
import { addTableItem } from './../../api/api';


class CategoriesContainer extends React.Component {
    render() {
        return <Categories {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        tableItems: state.tableItemsReducer.items,
        categoriesItems: state.categoriesReducer.categories,
        categoryId: state.categoriesReducer.currentCategoryId,
        searchString: state.tableItemsReducer.search
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTableItem: () => dispatch(addTableItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)