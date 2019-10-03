import React from 'react';
import { NavLink } from 'react-router-dom'
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
                <MenuListElem>
                    <NavLink
                        to="/news"
                        activeClassName="selected"
                    >
                        Новости
                    </NavLink>
                </MenuListElem>
                { authorized && (
                    <MenuListElem>
                        <NavLink
                            to="/profile"
                            activeClassName="selected"
                        >
                            Профиль
                        </NavLink>
                    </MenuListElem>
                )}
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