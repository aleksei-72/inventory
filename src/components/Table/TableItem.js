import React from 'react';
import style from './../../styles/tableItem.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
import { NavLink } from 'react-router-dom';

const TableItem = (props) => {
    let locationItem = props.location.map(el => <div key = {el.id}  className={style.location_item}>{`${el.department.title} (${el.number})`}</div>);
    return (
        <div className={style.item}>
            <input className={`${style.cell} ${style.check}`} type="checkbox" />
            <div className={`${style.cell} ${style.number}`}>{props.number}</div>
            <NavLink className={`${style.cell} ${style.link}`} to="#">{props.categoryTitle}</NavLink>
            <span className={`${style.cell} ${style.name}`}>{props.title}</span>
            <span className={`${style.cell} ${style.owner}`}>{!props.owner.name ? 'Не указано' : props.owner.name}</span>
            <span className={`${style.cell} ${style.location}`}>{locationItem}</span>
            <span className={`${style.cell} ${style.amount}`}>{!props.count ? '0' : props.count} шт.</span>
            <span className={`${style.cell} ${style.comments}`}>{!props.comment ? 'Исправно' : props.comment}</span>
            <button className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>
        </div>
    )
}

export default TableItem