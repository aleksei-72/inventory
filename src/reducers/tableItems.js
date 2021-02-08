import { tableApi } from './../api/api';

const SET_ITEMS = "SET_ITEMS";

let initialState = []

const tableItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return [...initialState, ...action.items]
    
        default:
            return state
    }
}


export const setTableItems = (items) => ({type:SET_ITEMS, items})

export const getTableItems = () => dispatch => {
    tableApi.getItems().then(res => dispatch(setTableItems(res)) )
}

export default tableItemsReducer