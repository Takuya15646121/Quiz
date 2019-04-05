import * as actions from '../actions'
import * as apis from '../apis'
import { call, put, take, takeLatest, fork } from 'redux-saga/effects'

export function* login() {
    while(true) {
        const action = yield take(actions.REQUEST_LOGIN)
        const id = action.id
        const password = action.password
        try {
            const {res, error} = yield call(apis.login, id, password)
            if(res && !error) {
                //TODO: トークン永続化
                yield put({type: actions.LOGIN_SUCCEEDED})
            } else {
                console.log(error)
                yield put({ type: actions.LOGIN_FAILED, error: error })
            }
        } catch(error) {
            yield put({ type: actions.LOGIN_FAILED, error: error })
        }
    }
}