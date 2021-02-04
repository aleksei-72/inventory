import React from 'react';
import style from './../../styles/header.module.css'
import printIcon from './../../img/icons/Print.svg'
import searchIcon from './../../img/icons/Search.svg'
import addIcon from './../../img/icons/Add.svg'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div>
                <h1>Inventory.<span className={style.title}>System</span></h1>
            </div>
            <div className={style.input_container}>
                <input type="text" placeholder="Поиск по инвентаризационному номеру" />
                <img src={searchIcon} alt="search" className={style.search_icon} />
            </div>
            <div className={style.button_container}>
                <button className={style.print_button}>Печать
                    <img src={printIcon} alt="print" className={style.button_icon} />
                </button>
                <button className={style.add_item_button}>Добавить поле
                    <img src={addIcon} alt="add" className={style.button_icon} />
                </button>
                <NavLink className={style.logout_link} to="#">Выйти из системы</NavLink>
            </div>
        </header>

    )
}

export default Header