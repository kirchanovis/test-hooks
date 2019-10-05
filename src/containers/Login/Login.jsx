import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom'
import * as Yup from 'yup';
import { postUser } from './../../api'
import { Context } from './../../context'
import { Preloader } from '../../components/Preloader';
import { ErrorMessage, LoginForm, Login as Root } from './styles'
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import { Message } from '../../components/Message';
import { loadingUser, successUser, errorUser, login } from './../../actions/login';

type Props = {

    values: Object,

    touched: Object,

    errors: Object,

    isSubmitting: boolean,

    isValid: boolean,

    handleChange?: (event: Event) => void,

    handleSubmit?: (event: Event) => void,

    handleBlur?: (event: Event) => void,

  }

function Login() {
    const form = {
            email: '',
            password: ''
        },
        [hiddenMessage, setHiddenMessage] = useState(true),
        { state, dispatch } = useContext(Context)

    if (state.user.data.id) { return <Redirect to="/profile" /> }

    function handleSubmit(values, { setSubmitting, setFieldValue }) {
        dispatch(loadingUser())
        postUser(values.email, values.password).then((data) => {
            setSubmitting(false);
            if (data.data.status === 'ok') {
                dispatch(successUser())
                dispatch(login(data.data.data))
            } else {
                if (data.data.message === 'wrong_email_or_password') {
                    dispatch(errorUser('Имя пользователя или пароль введены не верно'))
                } else {
                    dispatch(errorUser('Неизвестная ошибка'))
                }
                setHiddenMessage(false)
                setTimeout(() => {
                    setHiddenMessage(true)
                }, 2000);
            }
        })
            .catch(() => {
                setSubmitting(false);
                dispatch(errorUser('Сервер не доступен'))
                setHiddenMessage(false)
            })
            .finally(() => {
                setFieldValue('password', '')
                setSubmitting(false);
            })
    }

    return (
        <Root>
            <Preloader active={state.user.loading} />
            <Formik
                enableReinitialize
                initialValues={form}
                onSubmit={(values, { setSubmitting, setFieldValue }) => handleSubmit(values, {
                    setSubmitting,
                    setFieldValue
                })}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Email введен не корректно')
                        .required('Введите email'),
                    password: Yup.string()
                        .min(5, 'Минимальная длина пароля 5 символов')
                        .required('Введите пароль')
                })}
            >
                {(props: Props) => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;

                    return (
                        <LoginForm onSubmit={handleSubmit}>
                            <Message
                                hidden={hiddenMessage}
                                text={state.user.errorMessage}
                            />
                            <div>
                                <InputForm
                                    id="email"
                                    type="text"
                                    value={values.email || ''}
                                    changeInput={handleChange}
                                    blurInput={handleBlur}
                                    error={errors.email && touched.email ? true : false}
                                    placeholder="Email"
                                />
                            </div>
                            {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                            <div>
                                <InputForm
                                    id="password"
                                    type="text"
                                    value={values.password || ''}
                                    changeInput={handleChange}
                                    blurInput={handleBlur}
                                    placeholder="Пароль"
                                    error={errors.password && touched.password ? true : false}
                                />
                            </div>
                            {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                            <Button
                                text="Войти"
                                disabled={isSubmitting}
                                valid={!props.isValid}
                            />
                        </LoginForm>
                    )
                }}
            </Formik>
        </Root>
    );
}

export default Login;