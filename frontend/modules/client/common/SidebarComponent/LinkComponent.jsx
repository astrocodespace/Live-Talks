import React, {useState} from 'react';
import {SIconLink, SNav} from "./SidebarComponent.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import colors from "../../theme/colors";

export const LinkComponent = ({icon, active}) => {
    return (
        <SIconLink active={active}>
            <FontAwesomeIcon size={'lg'} color={active ? colors.white : colors.inactive} icon={icon}/>
        </SIconLink>
    );
}