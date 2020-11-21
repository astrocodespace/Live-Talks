import React, {useEffect, useState} from 'react';
import InputComponent from "../../common/InputComponent/InputComponent";
import {SButton} from "../../common/ButtonComponent/ButtonComponent.styled";
import {SForm, SFormCard, SLoginLayout} from "./components/AuthComponent/AuthComponent.styled";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {clearLoginError, loginUser} from "../../state/user/userActions";

const Login = () => {
    const {register, handleSubmit, errors, watch} = useForm();
    const dispatch = useDispatch();

    const {loginError} = useSelector(({user}) => user)

    const login = (data) => {
        dispatch(loginUser({loginData: data}))
    }

    const formData = watch();

    useEffect(() => {
        if (formData.email === '' && (loginError && loginError.code === 'LT-004')) {
            dispatch(clearLoginError());
        }

        if (formData.password === '' && (loginError && loginError.code === 'LT-003')) {
            dispatch(clearLoginError());
        }
    }, [loginError, formData])



    return (
        <SLoginLayout>
            <SFormCard>
                <SForm onSubmit={handleSubmit(login)}>
                    <InputComponent
                        inputRef={register({required: 'This field is required'})}
                        name={'email'}
                        type={'email'}
                        color={'primary'}
                        label={'Email'}
                        error={loginError && loginError.code === 'LT-004' ? loginError : errors.email}
                    />
                    <InputComponent
                        inputRef={register({required: 'This field is required'})}
                        name={'password'}
                        type={'password'}
                        color={'primary'}
                        label={'Password'}
                        error={loginError && loginError.code === 'LT-003' ? loginError : errors.password}
                    />
                    <SButton type={'submit'} color={'primary'}>Zaloguj się</SButton>
                </SForm>
            </SFormCard>
        </SLoginLayout>
    )
}

export default Login;