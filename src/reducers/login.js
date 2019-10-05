const initialState = {
    loading: false,
    errorMessage: '',
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        // авторизация
        case 'LOADING_USER': {
            const updateState = {
                ...state,
                loading: true
            }

            return updateState;
        }
        case 'SUCCESS_USER': {
            const updateState = {
                ...state,
                loading: false,
                errorMessage: 'Успешно'
            }

            return updateState;
        }
        case 'ERROR_USER': {
            const updateState = {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

            return updateState;
        }
        case 'LOGIN': {
            const updateState = {
                ...state,
                data: action.payload
            }

            return updateState;
        }
        case 'LOGOUT': {
            const updateState = {
                ...state,
                data: {}
            }

            return updateState;
        }
        default:
            return state
    }
}