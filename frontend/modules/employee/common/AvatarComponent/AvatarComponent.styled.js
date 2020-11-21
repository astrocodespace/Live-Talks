import styled, { css, keyframes } from "styled-components";

export const SAvatarBorder = styled.div`
    ${({ theme }) =>
    css`
        width: 45px;
        height: 45px;
        background-color: ${theme.colors.secondary};
        box-shadow: 0px 0px 20px 2px ${theme.colors.secondary};
        border-radius: 100%;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items: center;
    `}   
`;

export const SInnerBorder = styled.div`
    ${({theme}) => 
    css`
        width: 93%;
        height: 93%;
        background-color: ${theme.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    `}
`

export const SImage = styled.img`
    width: 85%;
    height: 85%;
    object-fit: cover;
    align-self: center;
    border-radius: 100%;
`