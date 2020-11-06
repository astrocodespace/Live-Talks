import styled, { css } from "styled-components";

export const SContent = styled.div`
    ${({ theme }) =>
    css`
        position: fixed;
        left: 120px;
        display: flex;
        width: calc(100% - 120px);
        height: 100%;
        padding: 40px 30px 0 30px;
    `}   
`;