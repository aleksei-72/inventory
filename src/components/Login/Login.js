import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm, stopSubmit} from 'redux-form';
import { login } from '../../api/api';
import style from './../../styles/login.module.css';


const Login = (props) => {
    const dispatch = useDispatch()

    if (props.isAuth === true) return <Redirect to={"/"} />

    let LoginForm = (props) => {
        return (
            <form className={style.form} onSubmit={props.handleSubmit(onSubmit)}>
                <label>
                    <span>Введите имя пользователя</span>
                    <Field
                        component={"input"}
                        name={"loginName"}
                        className={`${style.input} ${style.input__username}`} />
                </label>
                <div className={style.error}>{props.error}</div>
                <label>
                    <span>Введите пароль</span>
                    <Field
                        component={"input"}
                        name={"loginPassword"}
                        className={`${style.input} ${style.input__password}`}
                        type="password" />
                </label>
                <div className={style.forgot}>
                    <span>Забыли пароль?</span>
                </div>
                <button className={style.button}>Войти в аккаунт</button>

            </form>
        )
    }

    let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
    let onSubmit = formData => {

        if (!formData.loginName) {
            dispatch(stopSubmit("login", {_error: "Имя пользователя не заполнено"}))
            return
        }
        if (formData.loginName.length < 4) {
            dispatch(stopSubmit("login", {_error: "Имя пользователя должно содержать не менее 4 символов"}))
            return
        }
        if (!formData.loginPassword) {
            dispatch(stopSubmit("login", {_error: "Пароль не заполнен"}))
            return
        }
        if (formData.loginPassword.length < 6) {
            dispatch(stopSubmit("login", {_error: "Пароль должен содержать не менее 6 символов"}))
            return
        }
        dispatch(login(formData.loginName, formData.loginPassword))
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>Панель доступа</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Login