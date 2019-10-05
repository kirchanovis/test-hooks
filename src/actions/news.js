export const loadingNews = () => ({
    type: 'LOADING_NEWS'
});

export const successNews = () => ({
    type: 'SUCCESS_NEWS'
});

export const errorNews = (payload: string) => ({
    type: 'ERROR_NEWS',
    payload
});

export const getNewsApi = (payload: Array) => ({
    type: 'GET_NEWS',
    payload
});