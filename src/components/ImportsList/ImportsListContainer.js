import { connect } from 'react-redux'
import React from 'react';
import ImportsList from './ImportsList';



class ImportsListContainer extends React.Component {
    render() {
        return <ImportsList {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        importItems: state.importsReducer.importItems,
        isAuth: state.authReducer.isAuth

    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(ImportsListContainer)