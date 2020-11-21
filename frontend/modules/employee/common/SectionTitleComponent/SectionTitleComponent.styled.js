import styled, { css } from "styled-components";

export const STitle = styled.h1`
    ${({ theme }) =>
    css`
        color: ${theme.colors.primary};
        font-size: 28px;
        font-weight: bold;
    `
}   
`;