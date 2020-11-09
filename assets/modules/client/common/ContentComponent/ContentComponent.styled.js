import styled, { css } from "styled-components";
import respondTo from "../../theme/respondTo";

export const SContent = styled.div`
    ${({ theme }) =>
    css`
        display: flex;
        width: 100%;
        padding: 20px 16px;
        ${respondTo.md`
            padding-bottom: 0;
            margin-left: auto;
            padding: 0;
            width: calc(100% - 120px);
        `}

        height: 100%;
        margin: 0;
    `}   
`;