import styled from 'styled-components'

export const
    MessageElem = styled.div.attrs(({ hidden }) => ({
        persent: hidden ? 'none' : 'block'
    }))`
        padding: 15px;
        color: #fff;
        background: #f44d61;
        font-weight: bold;
        font: bold 13px Roboto, Arial, sans-serif;
        cursor: pointer;
        display: ${props => props.persent};
        width:100%;
        &:before {
            content: "×";
            display: inline-block;
            font: 1.5em Arial, sans-serif;
            margin-right: 0.5em;
            transition: -webkit-transform 0.05s ease;
            transition: transform 0.05s ease;
            transition: transform 0.05s ease, -webkit-transform 0.05s ease;
            vertical-align: middle;
        }
    `,
    DivMessage = styled.div`
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        margin-top: 60px;
    `;