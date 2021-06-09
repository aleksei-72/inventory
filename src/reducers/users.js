import {clearAuthorization} from "../axios";

const SET_USERS = "SET_USERS";
const ADD_NEW_TABLE_USER_ITEM = "ADD_NEW_TABLE_USER_ITEM";
const DELETE_TABLE_USER_ITEM = "DELETE_TABLE_USER_ITEM";
const UPDATE_TABLE_USER_ITEM = "UPDATE_TABLE_USER_ITEM";
const DELETE_ALL_USERS = "DELETE_ALL_USERS";

const LOGOUT = "LOGOUT";

let initialState = {
    users: [],
    // currentCategoryId: null
}

const usersReducer = (state = initialState, action) => {
    // console.log(action.type)
    // console.log(action)
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

        // case DELETE_TABLE_USER_ITEM:
        //     const deletedUserId = action.userId
        //     const deletedUser = [...state.users].find(item => item.id === deletedUserId)

        //     const deletedUserIndex = state.users.indexOf(deletedUser)

        //     console.log(deletedUserId, '--id--')
        //     console.log(deletedUser, '--user--')
        //     console.log(deletedUserIndex, '--user index--')
        //     const updatedUsersWithoutDeleted = [
        //         ...state.users.slice(0, deletedUserIndex),
        //         ...state.users.slice(deletedUserIndex + 1, state.users.length)
        //     ]
        //     console.log(updatedUsersWithoutDeleted)
        //     // return { ...state, users: [...updatedUsersWithoutDeleted] }
        //     return { ...state }

        // case DELETE_TABLE_USER_ITEM:
        //     const deletedItemId = action.itemId
        //     const deletedItem = [...state.users].find(item => item.id === deletedItemId)
        //     const deletedItemIndex = state.users.indexOf(deletedItem)
        //     const updatedItemsWithoutDeleted = [
        //         ...state.users.splice(deletedItemIndex, 0)
        //     ]

        //     console.log(updatedItemsWithoutDeleted)
        //     return { ...state }

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
            // console.log(updatedItem)
            console.log(updatedItems)
            console.log("update")
            return { ...state, users: [...updatedItems] }
            // return { ...state }
        

        case LOGOUT:
            // console.log(action)
            // console.log('--------------logout--------------')

            clearAuthorization()
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

// export const setCategoryId = (categoryId) => ({type:SET_CATEGORY_ID, categoryId})

export default usersReducer