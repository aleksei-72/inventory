import React from 'react';
import style from './../../styles/usersTableHeader.module.css'

const OwnersTableHeader = (props) => {
    return (
        <header className={style.header}>
            <div className={`${style.item} ${style.name}`}>Имя</div>
        </header>
    )
}
export default OwnersTableHeader