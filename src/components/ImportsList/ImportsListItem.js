import React, { useState } from 'react';
// import style from './../../styles/users.module.css';
import style from './../../styles/imports.module.css'



const ImportsListItem = (props) => {
    console.log(props)

    return (
        <div>
            <div className={style.item}>
                <div className={`${style.cell__container}  ${style.name}`}>
                    <div className={`${style.cell}`}>
                            <p>{props.name}</p>
                    </div>
                </div>

                <div className={`${style.cell__container} ${style.status}`}>
                    <p className={props.status ? `${style.succesfully__text}` : `${style.error__text}`}>{!props.status ? props.description : "Успешно"}</p>
                </div>
            </div>

        </div>


    )
}

export default ImportsListItem