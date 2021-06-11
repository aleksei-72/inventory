const SET_USERS = "SET_USERS";
const ADD_NEW_TABLE_USER_ITEM = "ADD_NEW_TABLE_USER_ITEM";
const DELETE_TABLE_USER_ITEM = "DELETE_TABLE_USER_ITEM";
const UPDATE_TABLE_USER_ITEM = "UPDATE_TABLE_USER_ITEM";
const DELETE_ALL_USERS = "DELETE_ALL_USERS";
const LOGOUT = "LOGOUT";

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            console.log(action.users)
            return { ...state, users: [...action.users] }
        case DELETE_ALL_USERS:
            console.log(action.users)
            return { ...state, users: [] }

        case ADD_NEW_TABLE_USER_ITEM:
            console.log("new user")
            return { ...state, users: [action.user, ...state.users] }

        case UPDATE_TABLE_USER_ITEM:
            console.log(action)
            const updatedItemId = action.item.id
            const updatedItem = [...state.users].find(item => item.id === updatedItemId)
            console.log('updatedItem', updatedItem)
            const updatedItemIndex = state.users.indexOf(updatedItem)

            console.log("update")
            const updatedItems = [
                ...state.users.slice(0, updatedItemIndex),
                action.item,
                ...state.users.slice(updatedItemIndex + 1, state.users.length)
            ]
            console.log(updatedItems)
            console.log("update")
            return { ...state, users: [...updatedItems] }
        

        case LOGOUT:
            localStorage.removeItem('token')
            return { ...state, users: [] }


        default:
            return state
    }
}


export const setUsersTableItems = (users) => ({ type: SET_USERS, users })
export const addNewTableUserItem = (user) => ({ type: ADD_NEW_TABLE_USER_ITEM, user });
export const deleteTableUserItem = (userId) => ({ type: DELETE_TABLE_USER_ITEM, userId });
export const updateTableUserItem = (item) => ({ type: UPDATE_TABLE_USER_ITEM, item });
export const deleteAllUsers = () => ({ type: DELETE_ALL_USERS });

export default usersReducer