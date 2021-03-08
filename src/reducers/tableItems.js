const SET_ITEMS = "SET_ITEMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    items: []
}

const tableItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return { ...state, items: [...state.items, ...action.items] }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        default:
            return state
    }
}

export const setTableItems = (items) => ({ type: SET_ITEMS, items });
export default tableItemsReducer