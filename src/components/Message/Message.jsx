import React from 'react';
import { MessageElem, DivMessage as Root } from './styles'

/**
 * @typedef Props
 */
type Props = {

  text: string,

  hidden: boolean
}

function Message(props: Props) {
    const {
        text,
        hidden
    } = props

    return (
        <Root>
            <MessageElem
                hidden={hidden}
            >
                {text}
            </MessageElem>
        </Root>
    );
}

export default Message;