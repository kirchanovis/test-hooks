import styled from 'styled-components'

export const
    Menu = styled.nav`
        display: flex;
        background-color: #4a89dc;
        justify-content: space-between;
        padding: 0 20px;
        font-family: Roboto;
        font-weight: 300;
        color: #fff;
    `,
    MenuList = styled.ul`
        list-style: none;
        display: flex;
        padding: 0;
    `,
    MenuListElem = styled.li`
        padding: 0 5px;
        & a{
            text-decoration: none;
            color: #fff;
            text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);
            &:hover{
                color: #ececec;
            }
        }
    `,
    MenuRightList = styled.ul`
        list-style: none;
        display: flex;
    `;
