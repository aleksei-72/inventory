import React from 'react';
import style from './../../styles/usersTableHeader.module.css'

const ImportsListHeader = (props) => {
    return (
        <header className={`${style.header}`}>
            <div className={`${style.item} ${style.import_name}`}>Название файла</div>
            <div className={`${style.item} ${style.import_user}`}>Пользователь</div>
            <div className={`${style.item} ${style.import_date}`}>Время импорта</div>
            <div className={`${style.item} ${style.import_count}`}>Кол-во элементов</div>
            <div className={`${style.item} ${style.import_status}`}>Статус импорта</div>
        </header>
    )
}
export default ImportsListHeader