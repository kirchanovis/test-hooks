import styled from 'styled-components'

export const
    Login = styled.div`
        color: #fff;
        font-family: Roboto;
        font-weight: 300;
        color: #fff;
        & a{
            text-decoration: none;
            color: #fff;
            text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);
            &.selected{
                color:#c6dfff;
            }
            &:hover{
                color: #ececec;
            }
        }
    `,
    Logout = styled.div`
        font-family: Roboto;
        font-weight: 300;
        color: #fff;
        cursor: pointer;
    `;