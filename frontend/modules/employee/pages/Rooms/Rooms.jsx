import React from 'react';
import {SListing, SListingHeader, SListingRow, SRoomsContainer, SRoomsHeaders} from "./components/Rooms.styled";
import {SButton} from "../../common/ButtonComponent/ButtonComponent.styled";
import {SForm} from "../../../auth/pages/Login/components/AuthComponent/AuthComponent.styled";

export const Rooms = () => {
    return (
        <SRoomsContainer>
            <SRoomsHeaders>Your rooms</SRoomsHeaders>
            <SListingHeader>
                <SButton type={'primary'}>Open new room</SButton>
            </SListingHeader>
            <SListing>
                <SListingRow>
                    <div>1</div>
                    <div>Tax Consultation, Submission of the application</div>
                    <div>
                        <SButton type={'primary'}>Join</SButton>
                        <SButton type={'warning'}>Remove</SButton>
                    </div>
                </SListingRow>
                <SListingRow>
                    <div>2</div>
                    <div>Submission of the application</div>
                    <div>
                        <SButton type={'primary'}>Join</SButton>
                        <SButton type={'warning'}>Remove</SButton>
                    </div>
                </SListingRow>
                <SListingRow>
                    <div>3</div>
                    <div>Tax Consultation, Submission of the application</div>
                    <div>
                        <SButton type={'primary'}>Join</SButton>
                        <SButton type={'warning'}>Remove</SButton>
                    </div>
                </SListingRow>
            </SListing>
        </SRoomsContainer>
    )
}
