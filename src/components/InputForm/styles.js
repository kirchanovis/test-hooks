import styled from 'styled-components'

export const
    InputDiv = styled.div`
        margin-bottom: 5px;
    `,
    Input = styled.input.attrs(({ error }) => ({
        borderBottomColor: error ? '#f44336' : '#757575'
    }))`
        font-size: 16px;
        padding: 10px 0;
        appearance: none;
        display: block;
        background: #fafafa;
        color: #636363;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${props => props.borderBottomColor};
        &::placeholder {
            color: ${props => props.borderBottomColor};
        }
    `;