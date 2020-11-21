import React from 'react';
import SectionTitleComponent from "../../common/SectionTitleComponent/SectionTitleComponent";
import {SCardContainer, SCardImage} from "./components/ServiceCardComponent/ServiceCardComponent.styled";
import {FileIcon} from "./assets/FileIcon";
import {ServicesListingContainer} from "./containers/ServicesListingContainer";
import SelectedServiceContainer from "./containers/SelectedServiceContainer";
import {useDispatch} from "react-redux";
import {fetchServices} from "../../state/services/servicesActions";

const Services = () => {
    const dispatch = useDispatch();
    dispatch(fetchServices());
    return (
        <>
            <ServicesListingContainer/>
            <SelectedServiceContainer/>
        </>
    )
}

export default Services;