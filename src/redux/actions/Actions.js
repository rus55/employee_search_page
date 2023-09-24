
export function requestUsersAction() {
    return { type: 'REQUESTED_USERS'};
}

export function requestUsersSuccessAction(data) {
    return { type: 'REQUESTED_USERS_SUCCESS', data: data };
}

export function requestUsersErrorAction() {
    return { type: 'REQUESTED_USERS_FAILED'};
}

export function requestUserAction(id) {
    return { type: 'REQUESTED_USER', userId: id };
}

export function requestUserSuccessAction(data) {
    return { type: 'REQUESTED_USER_SUCCESS', data: data };
}

export function requestUserErrorAction() {
    return { type: 'REQUESTED_USER_FAILED' };
}

export function setSearchResultAction(data) {
    return { type: 'SET_SEARCH_RESULT', data: data };
}