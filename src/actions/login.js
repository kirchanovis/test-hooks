export const loadingUser = () => ({
    type: 'LOADING_USER'
});

export const successUser = () => ({
    type: 'SUCCESS_USER'
});

export const errorUser = (payload: string) => ({
    type: 'ERROR_USER',
    payload
});

export const login = (payload: Object) => ({
    type: 'LOGIN',
    payload
});

export const logout = () => ({
    type: 'LOGOUT'
});