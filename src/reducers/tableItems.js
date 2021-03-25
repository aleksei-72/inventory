const SET_ITEMS = "SET_ITEMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const ADD_NEW_TABLE_ITEM = "ADD_NEW_TABLE_ITEM";
const DELETE_TABLE_ITEM = "DELETE_TABLE_ITEM";

let initialState = {
    items: []
}

const tableItemsReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case SET_ITEMS:
            return { ...state, items: [...state.items, ...action.items] }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case ADD_NEW_TABLE_ITEM:
            console.log("new item")
            return { ...state, items: [action.item, ...state.items] }

        case DELETE_TABLE_ITEM:
            const deletedItemId = action.itemId
            const deletedItem = [...state.items].find(item => item.id === deletedItemId)
            const deletedItemIndex = state.items.indexOf(deletedItem)
            const updatedItems = [
                    ...state.items.slice(0, deletedItemIndex),
                    ...state.items.slice(deletedItemIndex + 1, state.items.length - 1)

                ]
                return { ...state, items: [...updatedItems] }                
                
        default:
            return state
    }
}

export const setTableItems = (items) => ({ type: SET_ITEMS, items });
export const addTableItem = (item) => ({ type: ADD_NEW_TABLE_ITEM, item});
export const deleteTableItem = (itemId) => ({ type: DELETE_TABLE_ITEM, itemId});
export const addNewTableItem = (item) => (dispatch) => {dispatch(addTableItem(item))};

export default tableItemsReducer