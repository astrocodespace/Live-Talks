import styled, {css} from "styled-components";
import respondTo from "../../../../theme/respondTo";
import {SButton, SButtonOutline} from "../../../../common/ButtonComponent/ButtonComponent.styled";

export const SItemContainer = styled.div`
    ${({theme}) =>
    css`
        display: none;
        padding: 30px;
        ${respondTo.md`
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1 1 40%;
        `}
    `}   
`

export const SItemHeader = styled.h2`
    ${({ theme }) =>
    css`
        font-size: 18px;
        font-weight: bold;
        color: ${theme.colors.primary};
        margin-bottom: 20px;
    `}
`

export const SItemDescription = styled.div`
    ${({ theme }) =>
    css`
        font-size: 14px;
        font-weight: regular;
        color: ${theme.colors.primary};
        line-height: 20px;
        margin-bottom: 25px;
    `}   
`


export const SItemImageHeader = styled.img`
    ${({ theme }) => 
    css`
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: auto;
        margin-bottom: 15px;
    `}
`

export const SButtonsContainer = styled.div`
    ${({ theme }) => 
    css`
        display: flex;
        justify-content: space-around;
    `}
`

export const SQuestionButton = styled(SButtonOutline)`
    ${({ theme }) =>
    css`
        flex: 0 1 40%;
    `}
`

export const SQueueButton = styled(SButton)`
    ${({ theme }) =>
    css`
        flex: 0 1 40%;
    `}
`