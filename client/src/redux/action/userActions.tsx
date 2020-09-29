import {USER_LOGIN, USER_REGISTER} from "../types/user";
import axios from 'axios'
import {BACKEND_URL} from "../../config/config";

export function login(user: any) {
  return async (dispatch: any) => {
    await axios.post(BACKEND_URL + "user/login", user)
      .then(resp => {
        localStorage.setItem("token", resp.data.token)
        axios.defaults.headers.common['x-access-token'] = resp.data.token
        dispatch({
          type: USER_LOGIN,
          payload: {
            user: resp.data.user,
            token: resp.data.token,
            isAuthorization: true,
            errors: null
          }
        })
      })
      .catch(error => {
        localStorage.removeItem("token")
        dispatch({
          type: USER_LOGIN,
          payload: {
            user: null,
            isAuthorization: false,
            errors: error
          }
        })
      })
  }
}

export function register(user: any) {
  return async (dispatch: any) => {
    await axios.post(BACKEND_URL + "user/register", user)
      .then(resp =>
        dispatch({
          type: USER_REGISTER,
          payload: {
            user: resp.data.user,
            isAuthorization: true,
            errors: null
          }
        }))
      .catch(error =>
        dispatch({
          type: USER_REGISTER,
          payload: {
            user: null,
            errors: error.data
          }
        })
      )
  }
}
