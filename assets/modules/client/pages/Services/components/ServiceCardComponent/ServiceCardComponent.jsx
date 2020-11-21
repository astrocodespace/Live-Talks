import React from 'react';
import {SCardContainer, SCardImage, SServiceDesc, SServiceInfo, SServiceName} from "./ServiceCardComponent.styled";
import {FileIcon} from "../../assets/FileIcon";

const ServiceCardComponent = ({onClick, active = false, icon, waitingTime, name}) => {
    return (
        <SCardContainer active={active} onClick={onClick}>
            <SCardImage>
                <FileIcon width={120} height={120}/>
            </SCardImage>
            <SServiceInfo>
                <SServiceName>{name}</SServiceName>
                <SServiceDesc>Avarage queue waiting time: <b>{waitingTime}</b></SServiceDesc>
            </SServiceInfo>

        </SCardContainer>
    );
}

export default ServiceCardComponent;