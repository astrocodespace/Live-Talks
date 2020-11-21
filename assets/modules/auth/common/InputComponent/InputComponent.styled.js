import styled, { css } from "styled-components";

export const SInputGroup = styled.div`
    ${({ theme }) => 
    css`
          margin: 10px 0;
          position: relative;
          width: 100%;
    `}
`

export const SInput = styled.input`
    ${({ theme, color, hasErrors }) => 
    css`
          background: transparent;
          border: none;
          border-bottom: solid 1px ${hasErrors ? '#D73949' : '#ccc'};
          padding: 20px 2px 5px;
          transition: padding 0.4s;
          width: 100%;
          
          &:placeholder-shown + label {
              color: ${hasErrors ? '#D73949' : '#aaa'};
              font-size: 14px;
              top: 15px;
          }
          
          &:focus + label {
              color: ${hasErrors ? '#D73949' : theme.colors[color]};
              font-size: 12px;
              pointer-events: none;
              position: absolute;
              left: 2px;
              top: 2px;
              transition: top 0.4s, left 0.4s, font-size 0.4s;
          }
          
          &::placeholder{
              color: transparent;
              display:none;
          }
          
          &:focus,
          &:not(:placeholder-shown) {
              border-bottom: solid 1px ${hasErrors ? '#D73949' : theme.colors[color]};
              outline: none;
          }  
    `}
`

export const SLabel = styled.label`
    ${({ theme, color, hasErrors }) =>
    css`
          color: ${hasErrors ? '#D73949' : theme.colors[color]};
          font-size: 12px;
          pointer-events: none;
          position: absolute;
          left: 2px;
          top: 2px;
          transition: top 0.4s, left 0.4s, font-size 0.4s;
    `}
`

export const SInputError = styled.div`
    ${({ theme }) => 
    css`
        color: #D73949;
        font-size: 10px;
        margin-top: 10px;
        transition: all .3s;
    `}
`