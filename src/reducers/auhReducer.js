import {types} from "../types/types"

const initialState = {
    checking: true,
    errorLogin: null,
    errorRegister: null,
    // uid: null,
    // name: null
}


export const auhReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload,
                errorLogin: null,
                errorRegister: null
            }
        case types.authErrorLogin:
            return {
                ...state,
                errorLogin: action.payload
            }
        case types.authErrorRegister:
            return {
                ...state,
                errorRegister: action.payload
            }
        case types.authRegister:
            return {
                ...state,
                checking: false,
                ...action.payload,
                errorRegister: null
            }
        case types.authChekingFinish:
            return {
                ...state,
                checking: false,
            }
        case types.authLogout:
            return {
                checking: false,
            }
        default:
            return state
    }
}
