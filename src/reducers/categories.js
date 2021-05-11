const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CATEGORY_ID = "SET_CATEGORY_ID";

const DELETE_ALL_CATEGORIES = "DELETE_ALL_CATEGORIES";


let initialState = {
    categories: [],
    currentCategoryId: null
}

const categoriesReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case SET_CATEGORIES:
            console.log(action.categories)
            return {...state, categories: [...action.categories]}
        case DELETE_ALL_CATEGORIES:
            console.log(action.categories)
            return { ...state, categories: [] }
        case SET_CATEGORY_ID:
                console.log(action.categoryId)
                return {...state, currentCategoryId: action.categoryId}
   
        default:
            return state
    }
}


export const setCategoriesItems = (categories) => ({type:SET_CATEGORIES, categories})
export const setCategoryId = (categoryId) => ({type:SET_CATEGORY_ID, categoryId})

export const deleteAllCategories = () => ({ type: DELETE_ALL_CATEGORIES });


export default categoriesReducer