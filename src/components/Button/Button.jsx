import React from 'react';
import { Button as Root } from './styles'

/**
 * @typedef Props
 */
type Props = {

  text: string,

  disabled?: boolean,

  valid?: boolean
}

function Button(props: Props) {
    const {
        text,
        disabled,
        valid
    } = props

    return (
        <Root
            disabled={disabled || valid}
            type="submit"
        >
            {text}
        </Root>
    );
}

export default Button;