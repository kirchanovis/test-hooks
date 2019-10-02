import styled from 'styled-components'

export const
    Button = styled.button`
        position: relative;
        display: inline-block;
        padding: 12px 24px;
        margin: .3em 0 1em 0;
        width: 100%;
        vertical-align: middle;
        color: #fff;
        font-size: 16px;
        line-height: 20px;
        -webkit-font-smoothing: antialiased;
        text-align: center;
        letter-spacing: 1px;
        background: transparent;
        border: 0;
        border-bottom: 2px solid #3160B6;
        cursor: pointer;
        transition: all 0.15s ease;
        background: #4a89dc;
        text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);
        &:hover{
            background: #357bd8;
        }
        &:disabled{
            opacity: 0.4;
            pointer-events: none;
        }
    `;