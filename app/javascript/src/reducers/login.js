import * as actions from '../actions'

const initialState = {
    id: "",
    password: "",
    isLoading: false,
    isSucceded: false,
    error: "",
    hasToken: false
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
        console.log(action)
        return {
            ...state,
            isLoading: true,
        }
    } else if(action.type === actions.LOGIN_SUCCEEDED) {
        console.log(action)
        return {
            ...state,
            isLoading: false,
            isSucceded: true
        }
    } else if(action.type === actions.LOGIN_FAILED) {
        console.log(action)

        return {
            ...state,
            isLoading: false,
            error: action.error
        }
    }
    return state
}