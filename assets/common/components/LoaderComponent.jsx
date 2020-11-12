import React from 'react';
import {SLoaderContainer, SLoaderPath, SLoaderSvg} from "./LoaderComponent.styled";

export const LoaderComponent = () => {
    return (
        <SLoaderContainer>
            <SLoaderSvg className="spinner" width="65px" height="65px" viewBox="0 0 66 66"
                        xmlns="http://www.w3.org/2000/svg">
                <SLoaderPath className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33"
                             r="30"></SLoaderPath>
            </SLoaderSvg>
        </SLoaderContainer>
    )
}