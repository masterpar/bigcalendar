import {fetchNotToken, fetchWithToken} from "../helpers/fetch"
import {types} from "../types/types"


export const startLogin = (email, password) => {

        return async ( dispatch ) => {

        const res = await fetchNotToken('auth',{ email, password}, 'POST')
                const body = await res.json()

                if(body.ok){
                        localStorage.setItem('token', body.token)
                        localStorage.setItem('token-init-date', new Date().getTime())
                } else {
                        return dispatch( authErrorLogin(body.msg))
                }
                dispatch( login({
                        uid: body.uid,
                        name: body.name
                }))
        }
}

export const startChecking = () => {

        return async ( dispatch ) => {

                const res = await fetchWithToken('auth/renew')
                const body = await res.json()

                if(body.ok){
                        localStorage.setItem('token', body.token)
                        localStorage.setItem('token-init-date', new Date().getTime())
                } else {
                        dispatch( authErrorLogin(body.msg))
                        return dispatch( checkingFinish() )
                }
                dispatch( login({
                        uid: body.uid,
                        name: body.name
                }))
        }
};

const checkingFinish = () =>( {
        type: types.authChekingFinish
})


const login = ( user ) => ({
        type: types.authLogin,
        payload: user
})

const authErrorLogin = ( error ) => ({
        type: types.authErrorLogin,
        payload: error
})


export const startRegister = ( name, email, password) => {
        return async ( dispatch ) => {
                const res = await fetchNotToken('auth/new',{ name, email, password}, 'POST')
                const body = await res.json()

                if(body.ok){
                        localStorage.setItem('token', body.token)
                        localStorage.setItem('token-init-date', new Date().getTime())
                } else {
                        return dispatch( authErrorRegister(body.msg))
                }
                dispatch( login({
                        uid: body.uid,
                        name: body.name
                }))
        }
}


export const authErrorRegister = ( error ) => ({
        type: types.authErrorRegister,
        payload: error
})

export const startLogout = () => {
        return (dispatch) => {
                localStorage.clear()
                dispatch( logout())
        }
}


const logout = () => ({
       type: types.authLogout
})
