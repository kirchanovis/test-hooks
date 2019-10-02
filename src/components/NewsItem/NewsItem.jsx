import React from 'react';
import { NewsItemText, NewsItemTitle, NewsItem as Root } from './styles'

type Props = {

  title: string,

  text: string
}

function NewsItem(props: Props) {
    const {
        title,
        text
    } = props

    return (
        <Root>
            <NewsItemTitle>{title}</NewsItemTitle>
            <NewsItemText>{text}</NewsItemText>
        </Root>
    );
}

export default NewsItem;