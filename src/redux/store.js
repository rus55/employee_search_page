import {applyMiddleware, legacy_createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas/sagas'
import {reducer} from "./reducers/Reducer";

const sagaMiddleware = createSagaMiddleware()

const store = legacy_createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Run redux-saga
sagaMiddleware.run(rootSaga)

export default store

// @ts-ignore
window.store = store;