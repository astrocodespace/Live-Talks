import styled, { css } from 'styled-components';

export const SRoomsContainer = styled.div`
    ${({ theme }) => `
        display: flex;
        width: 100%;
        padding: 30px;
        flex-direction: column;
    `}
`

export const SRoomsHeaders = styled.h1`
    ${({ theme }) => `
        font-size: 24px;
    `}
`

export const SListingHeader = styled.div`
    ${({ theme }) => `
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        width: 100%;
    `}
`;

export const SListing = styled.div`
    ${({ theme }) => `
        display: flex;
        flex-direction: column;
        width: 100%;
    `}
`

export const SListingRow = styled.div`
    ${({ theme }) => `
        display: flex;
        flex-direction: row;
        box-shadow: 18px 20px 53px -21px rgba(0,0,0,0.5);
        padding: 12px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
        border-radius: 8px;
    `}
`
