import React from 'react';
import { Input, InputDiv as Root } from './styles'

/**
 * @typedef Props
 */
type Props = {

  placeholder?: string,

  id: string,

  type: string,

  value: string,

  changeInput?: (event: Event) => void,

  blurInput?: (event: Event) => void,

  error: boolean
}

function InputForm(props: Props) {
    const {
        placeholder,
        id,
        type,
        value,
        changeInput,
        blurInput,
        error
    } = props

    return (
        <Root>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={changeInput}
                onBlur={blurInput}
                error={error}
            />
        </Root>
    );
}

export default InputForm;