import * as ActionTypes from "../Constants/UserConstant"
import {apiClient, apiClientLogin} from "../Shared/apiClient";
// import {cookie} from "../Shared/constant";
import {getUsers, login, logout} from "../Endpoints/UserRoutes";
import { handleError } from "../Shared/handleError";
import { readFromLS, removeFromLS } from "../Shared/writeToLS";

export const loginUser = (username, password) => dispatch => {
    dispatch(loading())
    apiClientLogin.post(login, {
        username,
        password
    }).then(res =>  
        dispatch(loginSucess(res.data)))
        .catch(err => 
            dispatch(loginFailed(handleError (err))))
}
export const logoutUser = () => dispatch => {
    dispatch(loading())
    apiClient.post(logout).then(response => {
        dispatch(logoutSuccess())
    }).catch(error => dispatch(logoutFailed(error.response.data.message)))
}

const loading = () => ({
    type: ActionTypes.LOGIN_LOADING
})

export const loginSucess = (user) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: user
})

export const loginFailed = error => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: error
})

export const logoutSuccess = () => ({
    type: ActionTypes.LOGOUT_SUCCESS
})

export const logoutFailed = error => ({
    type: ActionTypes.LOGOUT_FAILED,
    payload: error
})