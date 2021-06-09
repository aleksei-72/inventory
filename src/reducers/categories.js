import {clearAuthorization} from "../axios";

const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CATEGORY_ID = "SET_CATEGORY_ID";

const ADD_CATEGORIES_ITEM = "ADD_CATEGORIES_ITEM";
const DELETE_CATEGORIES_ITEM = "DELETE_CATEGORIES_ITEM";
const UPDATE_CATEGORIES_ITEM = "UPDATE_CATEGORIES_ITEM";

const DELETE_ALL_CATEGORIES = "DELETE_ALL_CATEGORIES";
const LOGOUT = "LOGOUT";

let initialState = {
    categories: [],
    currentCategoryId: null
}

const categoriesReducer = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {

        case ADD_CATEGORIES_ITEM:
            console.log("new category")
            return { ...state, categories: [action.item, ...state.categories] }

        case DELETE_CATEGORIES_ITEM:
            const deletedItemId = action.itemId
            const deletedItem = [...state.categories].find(item => item.id === deletedItemId)
            const deletedItemIndex = state.categories.indexOf(deletedItem)
            const updatedItemsWithoutDeleted = [
                ...state.categories.slice(0, deletedItemIndex),
                ...state.categories.slice(deletedItemIndex + 1, state.categories.length)
            ]
            return { ...state, categories: [...updatedItemsWithoutDeleted] }
        
            case UPDATE_CATEGORIES_ITEM:
                const updatedItemId = action.item.id
                const updatedItem = [...state.categories].find(item => item.id === updatedItemId)
                const updatedItemIndex = state.categories.indexOf(updatedItem)
                console.log("update")
                const updatedItems= [
                    ...state.categories.slice(0, updatedItemIndex),
                    action.item,
                    ...state.categories.slice(updatedItemIndex + 1, state.categories.length)
                ]
    
                console.log(updatedItems)
    
                return { ...state, categories: [...updatedItems] }

        case SET_CATEGORIES:
            console.log(action.categories)
            return {...state, categories: [...action.categories]}
        case DELETE_ALL_CATEGORIES:
            console.log(action.categories)
            return { ...state, categories: [] }
        case SET_CATEGORY_ID:
                console.log(action.categoryId)
                return {...state, currentCategoryId: action.categoryId}

        case LOGOUT:
                // console.log(action)
                // console.log('--------------logout--------------')

                clearAuthorization()
                return {...state, categories: [], currentCategoryId:null}
   
        default:
            return state
    }
}


export const setCategoriesItems = (categories) => ({type:SET_CATEGORIES, categories})
export const setCategoryId = (categoryId) => ({type:SET_CATEGORY_ID, categoryId})

export const addCategory = (item) => ({ type: ADD_CATEGORIES_ITEM, item });
export const updateCategory = (item) => ({ type: UPDATE_CATEGORIES_ITEM, item });
export const deleteCategory = (itemId) => ({ type: DELETE_CATEGORIES_ITEM, itemId });

export const deleteAllCategories = () => ({ type: DELETE_ALL_CATEGORIES });


export default categoriesReducer