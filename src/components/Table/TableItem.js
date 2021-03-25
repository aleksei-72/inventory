import React from 'react';
import style from './../../styles/tableItem.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
import { NavLink } from 'react-router-dom';

const TableItem = (props) => {
    let locationItem = props.location.map(el => <div key={el.id} className={style.location_item}>{`${el.department.title} (${el.number})`}</div>);
    return (
        <div className={style.item}>
            <div className={`${style.cell__container} ${style.check}`}>
                <input className={`${style.cell}`} type="checkbox" />
            </div>
            <div className={`${style.cell__container}  ${style.number}`}>
                <div className={`${style.cell}`}>{props.number}</div>
            </div>
            <div className={`${style.cell__container} ${style.category}`}>
                <NavLink className={`${style.cell}`} to="#">{props.categoryTitle}</NavLink>
            </div>
            <div className={`${style.cell__container} ${style.name}`}>
                <p className={`${style.cell}`}>{props.title}</p>
            </div>
            <div className={`${style.cell__container} ${style.owner}`}>
                <p className={`${style.cell}`}>{!props.owner.name ? 'Не указано' : props.owner.name}</p>
            </div>
            <div className={`${style.cell__container} ${style.location}`}>
                <p className={`${style.cell} `}>{locationItem}</p>
            </div>
            <div className={`${style.cell__container} ${style.amount}`}>
                <p className={`${style.cell}`}>{!props.count ? '0' : props.count}</p>
            </div>
            <div className={`${style.cell__container} ${style.comments}`}>
                <p className={`${style.cell}`}>{!props.comment ? 'Исправно' : props.comment}</p>
            </div>
            <button onClick = {() => props.deleteItem(props.id)} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>
        </div>
    )
}

export default TableItem