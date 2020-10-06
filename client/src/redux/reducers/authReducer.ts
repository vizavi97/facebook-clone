import {USER_LOGIN, USER_REGISTER, VERIFY_TOKEN} from "../types/user";

const initialState = {
  user: null,
  token: localStorage.getItem('token') || "",
  isAuthorization: false,
  errors: null
}


export const authReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        errors: action.payload.errors,
        isAuthorization: action.payload.isAuthorization
      }
    case USER_REGISTER:
      return {
        user: action.payload.user,
        errors: action.payload.errors,
        isAuthorization: action.payload.isAuthorization
      }
    case VERIFY_TOKEN:
      return {
        user: action.payload.user,
        errors: action.payload.errors,
        isAuthorization: action.payload.isAuthorization
      }
    default: return state
  }
  return state
}
