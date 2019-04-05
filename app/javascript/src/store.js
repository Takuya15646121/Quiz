import * as reducers from './reducers'
import { rootSaga } from './sagas/rootSaga'

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

export const combinedReducers = combineReducers({ 
    login: reducers.loginReducer
})

export default function configureStore( initialState ={}) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combinedReducers,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
}