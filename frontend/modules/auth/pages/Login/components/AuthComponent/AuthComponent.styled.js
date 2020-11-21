import styled, { css } from "styled-components";

export const SLoginLayout = styled.div`
    ${({ theme }) => 
    css`
        min-width: 100vw;
        min-height: 100vh;
        background-color: ${theme.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
    `}   
`

export const SFormCard = styled.div`
    ${({ theme }) =>
    css`
        padding: 30px;
        background-color: ${theme.colors.white};
        max-width: 360px;
        width: 100%;
    `}   
`

export const SForm = styled.form`
    ${({ theme }) => 
    css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: space-around;
    `}
`