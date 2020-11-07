import styled, {css} from "styled-components";
import respondTo from "../../../../theme/respondTo";

export const SItemContainer = styled.div`
    ${({theme}) =>
    css`
        display: none;
        ${respondTo.md`
            display: flex;
            flex: 1 1 40%;
        `}
    `}   
`