import React from 'react';
import {STitle} from "./SectionTitleComponent.styled";

const SectionTitleComponent = ({children}) => {
    return (
        <STitle>
            {children}
        </STitle>
    )
}

export default SectionTitleComponent;