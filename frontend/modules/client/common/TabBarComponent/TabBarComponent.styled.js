import styled, {css} from 'styled-components';
import respondTo from "../../theme/respondTo";

export const STabBarContainer = styled.div`
    ${({ theme }) => 
    css`
        position: fixed;
        bottom: 0;
        height: 60px;
        background-color: ${theme.colors.primary};
        width: 100vw;
        z-index: 1000;
        display: flex;
        ${respondTo.md`
            display: none;
        `}
    `}
`