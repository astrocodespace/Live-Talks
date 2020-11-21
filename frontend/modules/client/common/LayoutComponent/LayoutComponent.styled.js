import styled, { css } from "styled-components";
import respondTo from "../../theme/respondTo";

export const SLayout = styled.div`
    ${({ theme }) =>
        css`
            min-height: 100vh;
            display: flex;
            flex-direction: row;
            margin-bottom: 60px;
            ${respondTo.md`
                margin-bottom: 0;
            `}
        `
    }   
`;