import React from 'react';
import style from './../../styles/usersTableHeader.module.css'

const UsersTableHeader = (props) => {
    return (
        <header className={style.header}>
            <div className={`${style.item} ${style.name}`}>Имя</div>
            <div className={`${style.item} ${style.username}`}>Логин</div>
            <div className={`${style.item} ${style.role}`}>Роль</div>
            <div className={`${style.item} ${style.lastVisit}`}>Последний визит</div>
            <div className={`${style.item} ${style.password}`}>Пароль</div>
            <div className={`${style.item} ${style.status}`}>Статус пользователя</div>
        </header>

    )
}
export default UsersTableHeader