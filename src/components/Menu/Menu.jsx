import React from 'react';
import { Link } from 'react-router-dom'
import { MenuRightList, MenuListElem, MenuList, Menu as Root } from './styles'

/**
 * @typedef Props
 */
type Props = {

  logoutRender?: () => React.Node,

  authorized: boolean,
}

function iconRenderer(content) {
    return (typeof content === 'string' ? content : JSON.stringify(content));
}

function Menu(props: Props) {
    const {
        logoutRender = iconRenderer,
        authorized
    } = props;

    return (
        <Root>
            <MenuList>
                <MenuListElem><Link to="/news">Новости</Link></MenuListElem>
                { authorized && (<MenuListElem><Link to="/profile">Профиль</Link></MenuListElem>)}
            </MenuList>
            <MenuRightList>
                <li>
                    {logoutRender()}
                </li>
            </MenuRightList>
        </Root>
    );
}

export default Menu;