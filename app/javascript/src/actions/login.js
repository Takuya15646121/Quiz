export const CHECK_TOKEN = "CHECK_TOKEN"
export const HAS_TOKEN = "HAS_TOKEN"

export const EDIT_ID = "EDIT_ID"
export const EDIT_PASSWORD = "EDIT_PASSWORD"

export const REQUEST_LOGIN = "REQUEST_LOGIN"
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const loginActionCreator = {
    checkToken: () => { return {type: CHECK_TOKEN }},
    hasToken: () => { return {type: HAS_TOKEN }},
    editId: (id) => { return { type: EDIT_ID, id }},
    editPassword: (password) => { return { type: EDIT_PASSWORD, password }},
    requestLogin: (id, password) => { return { type: REQUEST_LOGIN, id, password }},
    loginSucceed: () => { return { type: LOGIN_SUCCEEDED }},
    loginFailed: (error) => { return {type: LOGIN_FAILED, error}}
}