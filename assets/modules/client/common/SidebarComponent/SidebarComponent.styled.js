import styled, { css } from "styled-components";

export const SSidebarContainer = styled.div`
    ${({ theme }) =>
    css`
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column; 
        background-color: ${theme.colors.sidebar};
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
        color: ${theme.colors.inactive};
        ${active && `
            color: ${theme.colors.primary};
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
        color: ${theme.colors.primary};
        margin-top: 20px;
    `}   
`;