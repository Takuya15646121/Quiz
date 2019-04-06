import * as actions from '../actions'

const initialState = {
    id: "",
    password: "",
    isLoading: false,
    isSucceded: false,
    error: "",
    hasToken: false,
    token: "",
}

export const loginReducer = (state, action) => {
    state = state || initialState

    if(action.type === actions.HAS_TOKEN) {
        return {
            ...state,
            hasToken: true
        }
    } else if(action.type === actions.EDIT_ID) {
        return {
            ...state,
            id: action.id
        }
    } else if(action.type === actions.EDIT_PASSWORD) {
        return {
            ...state,
            password: action.password
        }
    } else if(action.type === actions.REQUEST_LOGIN) {
        return {
            ...state,
            isLoading: true,
        }
    } else if(action.type === actions.LOGIN_SUCCEEDED) {
        return {
            ...state,
            isLoading: false,
            isSucceded: true,
            token: action.token
        }
    } else if(action.type === actions.LOGIN_FAILED) {
        return {
            ...state,
            isLoading: false,
            error: action.error
        }
    }
    return state
}