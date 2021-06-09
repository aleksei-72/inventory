import React from 'react';
import style from './../../styles/usersTableHeader.module.css'

const ImportsListHeader = (props) => {
    return (
        <header className={`${style.header}`}>
            <div className={`${style.item} ${style.name}`}>Название файла</div>
            <div className={`${style.item} ${style.user}`}>Пользователь</div>
            <div className={`${style.item} ${style.date}`}>Время импорта</div>
            <div className={`${style.item} ${style.count}`}>Кол-во элементов</div>
            <div className={`${style.item} ${style.status}`}>Статус импорта</div>
        </header>
    )
}
export default ImportsListHeader