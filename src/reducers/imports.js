const SET_IMPORST_LIST = "SET_IMPORTS_LIST";
// const LOGOUT = "LOGOUT";
// const UPDATE_TOKEN = "UPDATE_TOKEN";
// const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    importItems: []
}

const importsReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case SET_IMPORST_LIST:
            return {...state, importItems:action.data}

        // case SET_USER_DATA:
        //     return {...state, currentUser: action.data}

        // case LOGOUT:
        //         console.log(action)
        //         console.log('--------------logout--------------')

        //         localStorage.removeItem('token')
        //         return {...state, currentUser: {}, isAuth:false}

        // case UPDATE_TOKEN:
        //         localStorage.setItem('token', action.token)
        //         return {...state, token:action.token}
    
        default:
            return state
    }
}


export const setImporthData = (data) => ({type:SET_IMPORST_LIST, data})
// export const setUserData = (data) => ({type:SET_USER_DATA, data})
// export const updateTokenData = (token) => ({type:UPDATE_TOKEN, token})
// export const logout = () => ({type:LOGOUT})


export default importsReducer