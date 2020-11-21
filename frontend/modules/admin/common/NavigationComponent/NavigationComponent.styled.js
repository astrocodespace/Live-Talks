import styled, { css } from 'styled-components';
import {Link} from "react-router-dom";

export const NavContainer = styled.div`
    ${({ theme }) => `
        display: flex;
        flex-direction: row;
    `}   
`

export const NavItem = styled(Link)`
    ${({ theme }) => `
        margin: 10px;
        padding: 5px;
        text-decoration: none;
        
    `}   
`
