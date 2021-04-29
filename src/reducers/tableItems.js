const SET_ITEMS = "SET_ITEMS";
const SET_CATEGORY_TABLE_ITEMS = "SET_CATEGORY_TABLE_ITEMS";
const SET_SEARCH_TABLE_ITEMS = "SET_SEARCH_TABLE_ITEMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const ADD_NEW_TABLE_ITEM = "ADD_NEW_TABLE_ITEM";
const DELETE_TABLE_ITEM = "DELETE_TABLE_ITEM";
const UPDATE_TABLE_ITEM = "UPDATE_TABLE_ITEM";

let initialState = {
    items: [],
    search: ''
}

const tableItemsReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case SET_ITEMS:           
            console.log(action.items) 
            return { ...state, items: [...state.items, ...action.items] }


        case SET_CATEGORY_TABLE_ITEMS:
                console.log(action.items)
                return { ...state, items: [...action.items] }

        case SET_SEARCH_TABLE_ITEMS:
                console.log(action.items)
                return { ...state, items: [...action.items], search:action.searchString }


        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case ADD_NEW_TABLE_ITEM:
            console.log("new item")
            return { ...state, items: [action.item, ...state.items] }

        case DELETE_TABLE_ITEM:
            const deletedItemId = action.itemId
            const deletedItem = [...state.items].find(item => item.id === deletedItemId)
            const deletedItemIndex = state.items.indexOf(deletedItem)
            const updatedItemsWithoutDeleted = [
                ...state.items.slice(0, deletedItemIndex),
                ...state.items.slice(deletedItemIndex + 1, state.items.length)
            ]
            return { ...state, items: [...updatedItemsWithoutDeleted] }

        case UPDATE_TABLE_ITEM:
            const updatedItemId = action.item.id
            const updatedItem = [...state.items].find(item => item.id === updatedItemId)
            const updatedItemIndex = state.items.indexOf(updatedItem)
            console.log("update")
            const updatedItems= [
                ...state.items.slice(0, updatedItemIndex),
                action.item,
                ...state.items.slice(updatedItemIndex + 1, state.items.length)
            ]
            return { ...state, items: [...updatedItems] }
        default:
            return state
    }
}

export const setTableItems = (items, categoryId) => ({ type: SET_ITEMS, items, categoryId });
export const setCategoryTableItems = (items) => ({ type: SET_CATEGORY_TABLE_ITEMS, items });


export const setSearchTableItems = (items, searchString) => ({ type: SET_SEARCH_TABLE_ITEMS, items, searchString});


export const addTableItem = (item) => ({ type: ADD_NEW_TABLE_ITEM, item });
export const updateTableItem = (item) => ({ type: UPDATE_TABLE_ITEM, item });
export const deleteTableItem = (itemId) => ({ type: DELETE_TABLE_ITEM, itemId });
export const addNewTableItem = (item) => (dispatch) => { dispatch(addTableItem(item)) };

export default tableItemsReducer