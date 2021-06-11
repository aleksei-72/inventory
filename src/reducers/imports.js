import { clearAuthorization } from "../axios";

const SET_IMPORST_LIST = "SET_IMPORTS_LIST";
const LOGOUT = "LOGOUT";

let initialState = {
    importItems: []
}

const importsReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case SET_IMPORST_LIST:
            return {...state, importItems:action.data}
        case LOGOUT:
                clearAuthorization()
                return {...state, importItems: []}
        default:
            return state
    }
}


export const setImporthData = (data) => ({type:SET_IMPORST_LIST, data})


export default importsReducer