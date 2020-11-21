import React, {useEffect, useState} from 'react';
import SectionTitleComponent from "../../../common/SectionTitleComponent/SectionTitleComponent";
import {SListingWrapper, SServicesListingContainer} from "../components/ListingComponent/ListingComponent.styled";
import ServiceCardComponent from "../components/ServiceCardComponent/ServiceCardComponent";
import {useDispatch, useSelector} from "react-redux";
import ContentLoader from "react-content-loader";
import {selectService} from "../../../state/services/servicesActions";
import {LoaderComponent} from "../../../../../common/components/LoaderComponent";

export const ServicesListingContainer = () => {
    const dispatch = useDispatch();
    const {items, loading, current} = useSelector(state => state.services)

    useEffect(() => {
        console.log(loading);
    }, [items, loading, current])

    return (
        <SServicesListingContainer>
            <SectionTitleComponent>
                List of services
            </SectionTitleComponent>

            {
                loading &&
                <LoaderComponent/>
            }

            <SListingWrapper>
                {
                    items &&
                    !loading &&
                    items.map((service, key) => {

                        return (
                            <ServiceCardComponent
                                key={key + '_' + service.name}
                                icon={service.icon}
                                name={service.name}
                                waitingTime={'~14 min.'}
                                active={current && (service.id === current.id)}
                                onClick={() => dispatch(selectService(service))}
                            />
                        )
                    })
                }
            </SListingWrapper>
        </SServicesListingContainer>
    );
}