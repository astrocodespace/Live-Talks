import React from 'react';
import {SInput, SInputError, SInputGroup, SLabel} from "./InputComponent.styled";

const InputComponent = ({label, color, type, name, inputRef, error}) => {
    console.log(error)
    return (
        <SInputGroup>
            <SInput
                color={color}
                type={type}
                name={name}
                placeholder={label}
                ref={inputRef}
                hasErrors={error && error.message}
            />
            <SLabel hasErrors={error && error.message} color={color}>{label}</SLabel>
            {
                error &&
                <SInputError>{error && error.message}</SInputError>
            }
        </SInputGroup>
    )
}

export default InputComponent;