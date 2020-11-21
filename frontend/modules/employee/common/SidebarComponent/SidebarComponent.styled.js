import styled, { css } from "styled-components";
import respondTo from "../../theme/respondTo";

export const SSidebarContainer = styled.div`
    ${({ theme }) =>
    css`
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column; 
        background-color: ${theme.colors.primary};
        left: -125px;
        transition: left 0.3s;
        ${respondTo.md`
            left: 0;
        `}
        width: 120px;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    `}
`

export const SNav = styled.div`
    ${({ theme }) =>
    css`
        padding-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`

export const SIconLink = styled.a`
    ${({ theme, active }) => 
    css`
        transition: all .2s;
        border-radius: 10px;
        ${active && `
            padding: 10px;
            background-color: ${theme.colors.secondary};
            border-radius: 100%;
        `
        }
        margin-bottom: 30px;
    `}
`

export const STitle = styled.h2`
    ${({ theme }) =>
    css`
        font-size: 16px;
        font-weight: bold;
        color: ${theme.colors.white};
        margin-top: 20px;
    `}   
`;