import {clearAuthorization} from "../axios";

const SET_OWNERS = "SET_OWNERS";
const ADD_NEW_TABLE_OWNER_ITEM = "ADD_NEW_TABLE_OWNER_ITEM";
const DELETE_TABLE_OWNER_ITEM = "DELETE_TABLE_OWNER_ITEM";
const UPDATE_TABLE_OWNER_ITEM = "UPDATE_TABLE_OWNER_ITEM";

const DELETE_ALL_OWNERS = "DELETE_ALL_OWNERS";
const LOGOUT = "LOGOUT";

let initialState = {
    owners: []
}

const ownersReducer = (state = initialState, action) => {
    // console.log(action.type)
    // console.log(action)
    switch (action.type) {
        case SET_OWNERS:
            console.log(action.owners)
            return { ...state, owners: [...action.owners] }
        case DELETE_ALL_OWNERS:
            console.log(action.owners)
            return { ...state, owners: [] }

        case ADD_NEW_TABLE_OWNER_ITEM:
            console.log("new owner")
            console.log("action owner", action)
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
            console.log(action)
            console.log('owner')
            const deletedItemId = action.ownerId
            const deletedItem = [...state.owners].find(item => item.id === deletedItemId)
            const deletedItemIndex = state.owners.indexOf(deletedItem)
            console.log(deletedItemIndex)
            const updatedItemsWithoutDeleted = [
                ...state.owners.slice(0, deletedItemIndex),
                ...state.owners.slice(deletedItemIndex + 1, state.owners.length)
            ]
            console.log(updatedItemsWithoutDeleted)
            return { ...state, owners: [...updatedItemsWithoutDeleted] }

        case UPDATE_TABLE_OWNER_ITEM:
            const updatedItemId = action.owner.id
            const updatedItem = [...state.owners].find(item => item.id === updatedItemId)
            const updatedItemIndex = state.owners.indexOf(updatedItem)
            console.log("update")
            const updatedItems = [
                ...state.owners.slice(0, updatedItemIndex),
                action.owner,
                ...state.owners.slice(updatedItemIndex + 1, state.owners.length)
            ]
            return { ...state, owners: [...updatedItems] }

        
        case LOGOUT:
            // console.log(action)
            // console.log('--------------logout--------------')

            clearAuthorization()
            return { ...state, owners: [] }


        default:
            return state
    }
}


export const setOwnersTableItems = (owners) => ({ type: SET_OWNERS, owners })
export const addNewTableOwnerItem = (owner) => ({ type: ADD_NEW_TABLE_OWNER_ITEM, owner });
export const deleteTableOwnerItem = (ownerId) => ({ type: DELETE_TABLE_OWNER_ITEM, ownerId });
export const updateTableOwnerItem = (owner) => ({ type: UPDATE_TABLE_OWNER_ITEM, owner });

export const deleteAllOwners = () => ({ type: DELETE_ALL_OWNERS });


export default ownersReducer