import axios from 'axios'

const createAxios = axios.create({
    baseURL: 'https://mysterious-reef-29460.herokuapp.com/api/v1/',
    responseType: 'json'
})

export const postUser = (user, pass) => {
    return createAxios.post('validate', { email: user,
        password: pass })
}

export const userInfo = (id) => {
    return createAxios.get(`user-info/${id}`)
}

export const getNews = () => {
    return createAxios.get('news')
}
