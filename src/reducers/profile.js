const initialState = {
    loading: false,
    errorMessage: '',
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOADING_PROFILE': {
            const updateState = {
                ...state,
                loading: true
            }

            return updateState;
        }
        case 'SUCCESS_PROFILE': {
            const updateState = {
                ...state,
                loading: false,
                errorMessage: 'Успешно'
            }

            return updateState;
        }
        case 'ERROR_PROFILE': {
            const updateState = {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

            return updateState;
        }
        case 'GET_PROFILE': {
            const updateState = {
                ...state,
                data: action.payload
            }

            return updateState;
        }
        default:
            return state
    }
}