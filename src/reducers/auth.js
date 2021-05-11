const SET_AUTH_DATA = "SET_AUTH_DATA";
const LOGOUT = "LOGOUT";
const UPDATE_TOKEN = "UPDATE_TOKEN";

let initialState = {
    currentUser: {},
    token: "",
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, token:action.data, isAuth:true}

        case LOGOUT:
                console.log(action)
                console.log('--------------logout--------------')

                localStorage.removeItem('token')
                return {...state, currentUser: {}, isAuth:false}

        case UPDATE_TOKEN:
                localStorage.setItem('token', action.token)
                return {...state, token:action.token}
    
        default:
            return state
    }
}


export const setAuthData = (data) => ({type:SET_AUTH_DATA, data})
export const updateTokenData = (token) => ({type:UPDATE_TOKEN, token})
export const logout = () => ({type:LOGOUT})


export default authReducer