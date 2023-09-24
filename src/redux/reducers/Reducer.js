const initialState = {
    users: [],
    user: {},
    isUserSuccess: false,
    isUserFailed: false,
    searchResult: [],

    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_USERS':
            return {
                ...state,
                isUserSuccess: false,
                isUserFailed: false,
                isLoading: true
            }
        case 'REQUESTED_USERS_SUCCESS':
            return {
                ...state,
                users: action.data,
                isUserSuccess: true,
                isLoading: false
            }
        case 'REQUESTED_USERS_FAILED':
            return {
                ...state,
                isUserFailed: true,
                isLoading: false
            }
        case 'REQUESTED_USER':
            return {
                ...state,
                isUserSuccess: false,
                isUserFailed: false,
                isLoading: true
            }
        case 'REQUESTED_USER_SUCCESS':
            return {
                ...state,
                user: action.data,
                isUserSuccess: true,
                isLoading: false
            }
        case 'REQUESTED_USER_FAILED':
            return {
                ...state,
                isUserFailed: true,
                isLoading: false
            }

        case 'SET_SEARCH_RESULT':
            return {
                ...state,
                searchResult: action.data
            }
        default:
            return state
    }
}