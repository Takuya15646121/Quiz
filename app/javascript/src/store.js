import * as reducers from './reducers'
import { rootSaga } from './sagas/rootSaga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createWhitelistFilter } from 'redux-persist-transform-filter';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

export const combinedReducers = combineReducers({ 
    login: reducers.loginReducer
})

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        createWhitelistFilter('login', ['token']),
    ],
}

const persistedReducer = persistReducer(persistConfig, combinedReducers)

function configureStore( initialState ={}) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);

    return store;
}

const store = configureStore()

export default store

export const persistor = persistStore(store)