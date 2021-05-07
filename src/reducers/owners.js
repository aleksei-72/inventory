const SET_OWNERS = "SET_OWNERS";
const ADD_NEW_TABLE_OWNER_ITEM = "ADD_NEW_TABLE_OWNER_ITEM";
const DELETE_TABLE_OWNER_ITEM = "DELETE_TABLE_OWNER_ITEM";


// const UPDATE_TABLE_USER_ITEM = "UPDATE_TABLE_USER_ITEM";

let initialState = {
    owners: [],
    // currentCategoryId: null
}

const ownersReducer = (state = initialState, action) => {
    console.log(action.type)
    console.log(action)
    switch (action.type) {
        case SET_OWNERS:
            console.log(action.owners)
            return { ...state, owners: [...action.owners] }

        case ADD_NEW_TABLE_OWNER_ITEM:
            console.log("new owner")
            return { ...state, owners: [action.owner, ...state.owners] }

        // case DELETE_TABLE_OWNER_ITEM:
        //     const deletedOwnerId = action.ownerId
        //     const deletedOwner = [...state.owners].find(item => item.id === deletedUserId)
        //     const deletedUserIndex = state.users.indexOf(deletedUser)
        //     console.log(deletedUserId, '--id--')
        //     console.log(deletedUser, '--user--')
        //     console.log(deletedUserIndex, '--user index--')
        //     const updatedUsersWithoutDeleted = [
        //         ...state.users.slice(0, deletedUserIndex),
        //         ...state.users.slice(deletedUserIndex + 1, state.users.length)
        //     ]
        //     return { ...state, users: [...updatedUsersWithoutDeleted] }

        case DELETE_TABLE_OWNER_ITEM:
            console.log('owner')
            // const deletedOwnerId = action.ownerId
            // const deletedOwner = [...state.owners].find(item => item.id === deletedUserId)
            // const deletedUserIndex = state.users.indexOf(deletedUser)
            // console.log(deletedUserId, '--id--')
            // console.log(deletedUser, '--user--')
            // console.log(deletedUserIndex, '--user index--')
            // const updatedUsersWithoutDeleted = [
            //     ...state.users.slice(0, deletedUserIndex),
            //     ...state.users.slice(deletedUserIndex + 1, state.users.length)
            // ]
            return { state }

        // case UPDATE_TABLE_USER_ITEM:
        //     const updatedItemId = action.item.id
        //     const updatedItem = [...state.users].find(item => item.id === updatedItemId)
        //     const updatedItemIndex = state.users.indexOf(updatedItem)
        //     console.log("update")
        //     const updatedItems = [
        //         ...state.users.slice(0, updatedItemIndex),
        //         action.item,
        //         ...state.users.slice(updatedItemIndex + 1, state.users.length)
        //     ]
        //     return { ...state, users: [...updatedItems] }


        default:
            return state
    }
}


export const setOwnersTableItems = (owners) => ({ type: SET_OWNERS, owners })
export const addNewTableOwnerItem = (owner) => ({ type: ADD_NEW_TABLE_OWNER_ITEM, owner });
export const deleteTableOwnerItem = (ownerId) => ({ type: DELETE_TABLE_OWNER_ITEM, ownerId });
// export const updateTableUserItem = (item) => ({ type: UPDATE_TABLE_USER_ITEM, item });


// export const setCategoryId = (categoryId) => ({type:SET_CATEGORY_ID, categoryId})

export default ownersReducer