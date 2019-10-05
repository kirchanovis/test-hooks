export const loadingProfile = () => ({
    type: 'LOADING_PROFILE'
});

export const successProfile = () => ({
    type: 'SUCCESS_PROFILE'
});

export const errorProfile = (payload: string) => ({
    type: 'ERROR_PROFILE',
    payload
});

export const getProfile = (payload: Object) => ({
    type: 'GET_PROFILE',
    payload
});