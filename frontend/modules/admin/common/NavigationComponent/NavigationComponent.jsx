import React from 'react';
import {NavContainer, NavItem} from "./NavigationComponent.styled";

export const NavigationComponent = () => {
    return (
        <NavContainer>
            <NavItem to={'/'}>Home</NavItem>
            <NavItem to={'services'}>Services</NavItem>
            <NavItem to={'users'}>Users</NavItem>
        </NavContainer>
    )
}
