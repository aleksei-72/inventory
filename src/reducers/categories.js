const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CATEGORY_ID = "SET_CATEGORY_ID";

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
        case SET_CATEGORY_ID:
                console.log(action.categoryId)
                return {...state, currentCategoryId: action.categoryId}
   
        default:
            return state
    }
}


export const setCategoriesItems = (categories) => ({type:SET_CATEGORIES, categories})
export const setCategoryId = (categoryId) => ({type:SET_CATEGORY_ID, categoryId})

export default categoriesReducer