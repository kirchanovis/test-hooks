import { combineReducers } from 'redux';
import LoginReducers from './login'
import NewsReducers from './news'
import ProfileReducers from './profile'

const allReducers = combineReducers({
    news: NewsReducers,
    profile: ProfileReducers,
    user: LoginReducers
});

export default allReducers;