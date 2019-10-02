import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { Context } from './../../context'
import reducer from './../../reducer'

import { Login } from '../Login';
import { News } from '../News';
import { Profile } from '../Profile';
import { Menu } from '../../components/Menu';
import { LoginButton } from '../../components/LoginButton';
import { NoPage } from '../../components/NoPage';

function App() {
    const initialState = {
            news: {
                loading: false,
                errorMessage: '',
                data: []
            },
            profile: {
                loading: false,
                errorMessage: '',
                data: {}
            },
            user: {
                loading: false,
                errorMessage: '',
                data: {}
            }
        },
        [state, dispatch] = useReducer(reducer, initialState)

    function handleToogle() {
        const authorized = Boolean(state.user.data.id)

        if (authorized) {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }

    return (
        <Context.Provider value={{ dispatch,
            state }}>
            <Menu
                authorized={Boolean(state.user.data.id)}
                logoutRender={() => (
                    <LoginButton
                        authorized={Boolean(state.user.data.id)}
                        onToggleClick={handleToogle}
                    />
                )}
            />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route path="/news" component={News} />
                <Route path="/profile" component={Profile} />
                <Route component={NoPage} />
            </Switch>
        </Context.Provider>
    );
}

export default App;
