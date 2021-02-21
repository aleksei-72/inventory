import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../api/api';
// import { setUser } from '../../reducers/auth';
import style from './../../styles/login.module.css';


const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    if(props.isAuth === true) return <Redirect to={"/"}/>
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>Панель доступа</h1>
                <form className={style.form}>
                    <label>
                        <span>Введите имя пользователя</span>
                        <input 
                                value = {username} 
                                onChange = { (event) => setUsername(event.target.value) } 
                                className={`${style.input} ${style.input__username}`}/>
                    </label>
                    <label>
                        <span>Введите пароль</span>
                        <input 
                                value = {password} 
                                onChange = { (event) => setPassword(event.target.value) } 
                                className={`${style.input} ${style.input__password}`} 
                                type="password" />
                    </label>
                    <div className={style.forgot}>
                        <span>Забыли пароль?</span>
                    </div>
                </form>
                <button onClick={ () => dispatch(login(username, password)) } className={style.button}>Войти в аккаунт</button>
            </div>
        </div>
    )
}

export default Login