import { connect } from 'react-redux'
import React from 'react';
import Header from './Header';
import { addTableItem } from './../../api/api';


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        tableItems: state.tableItemsReducer.items,
        searchString: state.tableItemsReducer.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTableItem: () => dispatch(addTableItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)