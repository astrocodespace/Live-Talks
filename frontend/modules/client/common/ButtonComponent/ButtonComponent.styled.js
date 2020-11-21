import styled, { css } from 'styled-components';

export const SButton = styled.button`
    ${({ theme, type }) => 
    css`
        border-radius: 12px;
        padding: 12px 10px;
        color: ${theme.colors.white};
        font-weight: medium;
        border: 1px solid ${theme.colors[type]};
        background-color: ${theme.colors[type]};
        font-weight: 600;
        box-shadow: 0 0 4px #999;
        transition: background 0.8s;
        background-position: center;
        cursor: pointer;
        
        &:hover {
            background: ${theme.colors.ripple[type].hover} radial-gradient(circle, transparent 1%, ${theme.colors.ripple[type].hover} 1%) center/15000%;
        }
        
        &:active {
              background-color: ${theme.colors.ripple[type].active};
              background-size: 100%;
              transition: background 0s;
        }
    `}   
`

export const SButtonOutline = styled(SButton)`
    ${({ theme, type }) => 
    css`
        background-color: unset;
        color: ${theme.colors[type]};
        transition: background 0.8s;
        background-position: center;
        cursor: pointer;
        
        &:hover {
            color: ${theme.colors.white};
            background: ${theme.colors.ripple[type].hover} radial-gradient(circle, transparent 1%, ${theme.colors.ripple[type].hover} 1%) center/15000%;
        }
        
        &:active {
              background-color: ${theme.colors.ripple[type].active};
              background-size: 100%;
              transition: background 0s;
        }
    `}
`