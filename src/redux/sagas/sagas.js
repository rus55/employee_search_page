import {
    requestUserErrorAction, requestUsersErrorAction, requestUsersSuccessAction,
    requestUserSuccessAction
} from "../actions/Actions";
import {call, put, takeEvery, all} from "redux-saga/effects";
import {getUser, getUsers} from "../api/Api";

function* getUsersWorker() {
    try {
        const {data} = yield call(getUsers)
        yield put(requestUsersSuccessAction(data))
    } catch (error) {
        yield put(requestUsersErrorAction())
    }
}

function* getUsersWatcher() {
    yield takeEvery('REQUESTED_USERS', getUsersWorker)
}

function* getUserWorker(action) {
    try {
        const {data} = yield call(getUser, action.userId)
        yield put(requestUserSuccessAction(data))
    } catch (error) {
        yield put(requestUserErrorAction())
    }
}

function* getUserWatcher() {
    yield takeEvery('REQUESTED_USER', getUserWorker)
}

export const rootSaga = function* root() {
    yield all([
        getUserWatcher(),
        getUsersWatcher()
    ])
}