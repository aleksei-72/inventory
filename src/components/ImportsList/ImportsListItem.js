import React, { useState } from 'react';
// import style from './../../styles/users.module.css';
import style from './../../styles/imports.module.css'



const ImportsListItem = (props) => {
    console.log(props)

    return (
            <div className={style.item}>
                <div className={`${style.cell__container}  ${style.name}`}>
                    <div className={`${style.cell}`}>
                            <p className={`${style.filename}`}>{props.name}</p>
                    </div>
                </div>

                <div className={`${style.cell__container}  ${style.user}`}>
                    <p>{props.username}</p>
                </div>

                <div className={`${style.cell__container}  ${style.date}`}>
                    <p>{(new Date((Date.parse(props.date)))).toLocaleString("ru", { year: 'numeric', month: 'long', day: 'numeric',
                        hour: 'numeric', minute: 'numeric'})}</p>
                </div>

                <div className={`${style.cell__container}  ${style.count}`}>
                    <p>{props.count}</p>
                </div>

                <div className={`${style.cell__container} ${style.status}`}>
                    <p className={props.status ? `${style.succesfully__text}` : `${style.error__text}`}>{!props.status ? props.description : "Успешно"}</p>
                </div>
            </div>


    )
}

export default ImportsListItem