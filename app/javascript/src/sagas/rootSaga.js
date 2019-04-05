import { login } from './login'

import { fork } from 'redux-saga/effects'

export function* rootSaga() { 
    yield fork(login)
}