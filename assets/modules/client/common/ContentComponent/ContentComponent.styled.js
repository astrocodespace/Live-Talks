import styled, { css } from "styled-components";
import respondTo from "../../theme/respondTo";

export const SContent = styled.div`
    ${({ theme }) =>
    css`
        position: fixed;
        display: flex;
        width: 100%;
        ${respondTo.md`
            width: calc(100% - 120px);
            left: 120px;
        `}

        height: 100%;
        padding: 40px 30px 0 30px;
    `}   
`;