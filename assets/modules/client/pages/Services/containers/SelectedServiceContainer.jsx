import React, {useEffect} from 'react';
import logo from './../assets/tax-consultant.jpg';
import {
    SButtonsContainer,
    SItemContainer,
    SItemDescription,
    SItemHeader,
    SItemImageHeader,
    SQuestionButton,
    SQueueButton
} from "../components/SingleServiceComponent/SingleServiceComponent.styled";
import {useSelector} from "react-redux";
import {SButton, SButtonOutline} from "../../../common/ButtonComponent/ButtonComponent.styled";

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
                    <SItemImageHeader src={logo}/>
                    <SItemHeader>{service.name}</SItemHeader>
                    <SItemDescription>{service.description}</SItemDescription>
                    <SButtonsContainer>
                        <SQuestionButton type={'primary'}>Ask a question</SQuestionButton>
                        <SQueueButton type={'warning'}>Join queue</SQueueButton>
                    </SButtonsContainer>
                </SItemContainer>
            }
        </>
    );
}

export default SelectedServiceContainer;