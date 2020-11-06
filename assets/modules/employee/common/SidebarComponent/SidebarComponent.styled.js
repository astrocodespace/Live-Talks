import styled, { css } from "styled-components";

export const SSidebarContainer = styled.div`
    ${({ theme }) =>
    css`
        display: flex;
        flex-direction: row; 
        background-color: ${theme.colors.sidebar};
        width: 120px;
        justify-content: center;
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