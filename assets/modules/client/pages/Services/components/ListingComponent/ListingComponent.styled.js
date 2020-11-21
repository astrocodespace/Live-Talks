import styled, { css } from 'styled-components';
import respondTo from "../../../../theme/respondTo";

export const SServicesListingContainer = styled.div`
    ${({theme}) => 
    css`
        padding: 30px;
        width: 100%;
        overflow-y: scroll;
        height: calc(100vh - 120px);
        ${respondTo.md`
            flex: 0 0 40%;
            height: calc(100vh - 60px);  
        `}

    `}   
`

export const SListingWrapper = styled.div`
    ${({theme}) => 
    css`
    
    `}   
`