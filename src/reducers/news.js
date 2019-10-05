const initialState = {
    loading: false,
    errorMessage: '',
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        // новости
        case 'LOADING_NEWS': {
            const updateState = {
                ...state,
                loading: true
            }

            return updateState;
        }
        case 'SUCCESS_NEWS': {
            const updateState = {
                ...state,
                loading: false,
                errorMessage: 'Успешно'
            }

            return updateState;
        }
        case 'ERROR_NEWS': {
            const updateState = {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

            return updateState;
        }
        case 'GET_NEWS': {
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