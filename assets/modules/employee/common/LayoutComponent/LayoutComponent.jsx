import React from 'react';
import { SLayout } from "./LayoutComponent.styled";
import {SSidebarContainer, STitle} from "../SidebarComponent/SidebarComponent.styled";

const LayoutComponent = ({children}) => {
    return (
        <SLayout>
            <SSidebarContainer>
                <STitle>Actin</STitle>
            </SSidebarContainer>
            {children}
        </SLayout>
    )
}

export default LayoutComponent;