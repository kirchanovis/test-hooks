import React from 'react';
import { NavLink } from 'react-router-dom'
import { Login, Logout } from './styles'

type Props = {

    authorized: boolean,

    onToggleClick?: (event: Event) => void
}

function LoginButton(props: Props) {
    const {
        authorized,
        onToggleClick
    } = props

    return (
        <React.Fragment>
            { authorized ? (
                <Logout
                    onClick={onToggleClick}
                >
              Выйти
                </Logout>
            ) : (
                <Login>
                    <NavLink
                        activeClassName="selected"
                        to="/login"
                    >
                        Войти
                    </NavLink>
                </Login>
            )}
        </React.Fragment>
    );
}

export default LoginButton;