import styled, { css, keyframes } from "styled-components";

export const SLoaderContainer = styled.div`
    ${({ theme }) => 
    css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    `}
`

export const SLoaderSvg = styled.svg`
    ${({ theme }) =>
    css`
        animation: ${rotator} 1.4s linear infinite;
    `}
`

export const SLoaderPath = styled.circle`
    ${({ theme }) =>
    css`
        stroke-dasharray: 187;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation:
            ${dash} 1.4s ease-in-out infinite, 
            ${colors} ${1.4 * 4}s ease-in-out infinite;
    `}
`

const rotator = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(270deg); 
    }
`

const colors = keyframes`
    0% { stroke: #4285F4; }
    25% { stroke: #DE3E35; }
    50% { stroke: #F7C223; }
    75% { stroke: #1B9A59; }
    100% { stroke: #4285F4; }   
`

const dash = keyframes`
    0% { 
        stroke-dashoffset: 187; 
    }
    50% {
        stroke-dashoffset: ${187/4};
        transform:rotate(135deg);
    }
    100% {
        stroke-dashoffset: 187;
        transform:rotate(450deg);
    }
`