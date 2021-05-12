import React from 'react';
import style from './../../styles/tableHeader.module.css'

const TableHeader = (props) => {
    return (
        <header className={style.header}>
            <div className={`${style.item} ${style.number}`}>№</div>
            <div className={`${style.item} ${style.category}`}>Категория</div>
            <div className={`${style.item} ${style.name}`}>Наименование</div>
            <div className={`${style.item} ${style.owner}`}>Ответственный</div>
            <div className={`${style.item} ${style.location}`}>Место</div>
            <div className={`${style.item} ${style.amount}`}>Количество</div>
            <div className={`${style.item} ${style.price}`}>Цена</div>
            <div className={`${style.item} ${style.cost}`}>Сумма</div>
            <div className={`${style.item} ${style.comments}`}>Комментарии</div>
        </header>

    )
}
export default TableHeader