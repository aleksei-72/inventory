import React from 'react';
import style from './../../styles/tableItem.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
import { NavLink } from 'react-router-dom';

const TableItem = (props) => {
    return (
        <div className={style.item}>
            <input className={`${style.cell} ${style.check}`} type="checkbox" />
            <div className={`${style.cell} ${style.number}`}>41013400100</div>
            <NavLink className={`${style.cell} ${style.link}`} to="#">Акустика</NavLink>
            <span className={`${style.cell} ${style.name}`}>Аlto ELVIS 15/4 2х полос.</span>
            <span className={`${style.cell} ${style.owner}`}>Босташвили Алена Владимировна</span>
            <span className={`${style.cell} ${style.location}`}>1 корпус 309вц каб.</span>
            <span className={`${style.cell} ${style.amount}`}>1 шт.</span>
            <span className={`${style.cell} ${style.comments}`}>Нуждается в ремонте</span>
            <button className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>
        </div>
    )
}

export default TableItem