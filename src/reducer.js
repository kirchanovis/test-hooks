export default function (state, action) {
    switch (action.type) {
        // профиль
        case 'LOADING_PROFILE': {
            const updateState = {
                ...state,
                profile: {
                    ...state.profile,
                    loading: true
                }
            }

            return updateState;
        }
        case 'SUCCESS_PROFILE': {
            const updateState = {
                ...state,
                profile: {
                    ...state.profile,
                    loading: false,
                    errorMessage: 'Успешно'
                }
            }

            return updateState;
        }
        case 'ERROR_PROFILE': {
            const updateState = {
                ...state,
                profile: {
                    ...state.profile,
                    loading: false,
                    errorMessage: action.payload
                }
            }

            return updateState;
        }
        case 'GET_PROFILE': {
            const updateState = {
                ...state,
                profile: {
                    ...state.profile,
                    data: action.payload
                }
            }

            return updateState;
        }
        // новости
        case 'LOADING_NEWS': {
            const updateState = {
                ...state,
                news: {
                    ...state.news,
                    loading: true
                }
            }

            return updateState;
        }
        case 'SUCCESS_NEWS': {
            const updateState = {
                ...state,
                news: {
                    ...state.news,
                    loading: false,
                    errorMessage: 'Успешно'
                }
            }

            return updateState;
        }
        case 'ERROR_NEWS': {
            const updateState = {
                ...state,
                news: {
                    ...state.news,
                    loading: false,
                    errorMessage: action.payload
                }
            }

            return updateState;
        }
        case 'GET_NEWS': {
            const updateState = {
                ...state,
                news: {
                    ...state.news,
                    data: action.payload
                }
            }

            return updateState;
        }
        // авторизация
        case 'LOADING_USER': {
            const updateState = {
                ...state,
                user: {
                    ...state.user,
                    loading: true
                }
            }

            return updateState;
        }
        case 'SUCCESS_USER': {
            const updateState = {
                ...state,
                user: {
                    ...state.user,
                    loading: false,
                    errorMessage: 'Успешно'
                }
            }

            return updateState;
        }
        case 'ERROR_USER': {
            const updateState = {
                ...state,
                user: {
                    ...state.user,
                    loading: false,
                    errorMessage: action.payload
                }
            }

            return updateState;
        }
        case 'SERVER_ERROR_USER': {
            const updateState = {
                ...state,
                user: {
                    ...state.user,
                    loading: false,
                    errorMessage: 'Сервер не доступен'
                }
            }

            return updateState;
        }
        case 'LOGIN': {
            const updateState = {
                ...state,
                user: {
                    ...state.user,
                    data: action.payload
                }
            }

            return updateState;
        }
        case 'LOGOUT': {
            const updateState = {
                ...state,
                user: {
                    ...state.user,
                    data: {}
                }
            }

            return updateState;
        }
        default:
            return state
    }
}