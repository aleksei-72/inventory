import { connect } from 'react-redux'
import React from 'react';
import Categories from './Categories';


class CategoriesContainer extends React.Component {
    render() {
        return <Categories {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        categoriesItems: state.categoriesReducer.categories,
        categoryId: state.categoriesReducer.currentCategoryId,
        searchString: state.tableItemsReducer.search
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)