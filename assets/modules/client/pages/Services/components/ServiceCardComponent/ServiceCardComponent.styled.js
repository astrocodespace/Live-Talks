import styled, { css } from 'styled-components';

export const SCardContainer = styled.div`
    ${({ theme, active }) => 
    css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 50px 20px 0 0;
        transition: all .3s;
        
        &:hover {
            box-shadow: 18px 20px 53px -21px rgba(0,0,0,0.3);
            border-radius: 12px;
        }
        
        ${active && 
        css`
            box-shadow: 18px 20px 53px -21px rgba(0,0,0,0.3);
            border-radius: 12px;
            transform: translateX(10px);
        `}
    `}   
`

export const SCardImage = styled.div`
    ${({ theme }) => 
    css`
        
    `}   
`

export const SServiceInfo = styled.div`
    ${({ theme }) =>
    css`

    `}
`

export const SServiceName = styled.h3`
    ${({ theme }) => 
    css`
        font-weight: bold;
        color: ${theme.colors.primary};
        margin-bottom: 8px;
    `}   
`

export const SServiceDesc = styled.p`
    ${({theme}) =>
    css`
        font-size: 14px;
        color: ${theme.colors.inactive};
        font-weight: medium;
    `}   
`