import styled, { css } from "styled-components";

export const SLayout = styled.div`
    ${({ theme }) =>
        css`
            min-width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: row;
        `
    }   
`;