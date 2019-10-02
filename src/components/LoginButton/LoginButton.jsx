import React from 'react';
import { Link } from 'react-router-dom'
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
                    <Link to="/login">Войти</Link>
                </Login>
            )}
        </React.Fragment>
    );
}

export default LoginButton;