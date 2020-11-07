import React, {useEffect} from 'react';
import {SItemContainer} from "../components/SingleServiceComponent/SingleServiceComponent.styled";
import {useSelector} from "react-redux";

const SelectedServiceContainer = () => {
    const service = useSelector(({services}) => services.current)

    useEffect(() => {
        console.log(service);
    }, [service])
    return (
        <>
            {
                service &&
                <SItemContainer>
                    <div>{service.name}</div>
                </SItemContainer>
            }
        </>
    );
}

export default SelectedServiceContainer;