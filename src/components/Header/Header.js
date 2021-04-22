import React, { useState } from 'react';
import style from './../../styles/header.module.css'
import printIcon from './../../img/icons/Print.svg'
import searchIcon from './../../img/icons/Search.svg'
import searchIconBtn from './../../img/icons/Search_btn.svg'
import addIcon from './../../img/icons/Add.svg'
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/auth';
import { getItems } from '../../api/api';
// import { updateToken } from '../../api/api';
import { setSearchTableItems } from './../../reducers/tableItems';
import { printItems } from './../../print';

const Header = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    const [search, setSearch] = useState(' ')
    return (
        <header className={style.header}>
            <div>
                <h1>Inventory.<span className={style.title}>System</span></h1>
            </div>
            <div className={style.input_container}>
                <input className={style.search} type="text" placeholder="Поиск" value={search} onChange={(e) => {
                    console.log(search)
                    setSearch(e.target.value)
                }} />
                <img src={searchIcon} alt="search" className={style.search_icon} />
                <button onClick={() => getItems(0, 0, props.searchString).then((res) => {
                    console.log(res.data)
                    // dispatch(setCategoryTableItems(res.data.items))
                    dispatch(setSearchTableItems(res.data.items, search))

                })} className={style.search_button}>
                    <img src={searchIconBtn} alt="search" className={style.search_icon} />
                </button>


                {/* <button className={style.search_button}>
                    <img src={searchIconBtn} alt="search" className={style.search_icon} />
                </button> */}


            </div>
            <div className={style.button_container}>





                <button onClick = { () => printItems() } className={style.print_button}>Печать
                    <img src={printIcon} alt="print" className={style.button_icon} />
                </button>



                <button onClick={props.addTableItem} className={style.add_item_button}>Добавить поле
                    <img src={addIcon} alt="add" className={style.button_icon} />
                </button>
                <button onClick={() => dispatch(logout())} className={style.logout_link}>Выйти из системы</button>
            </div>
        </header>

    )
}

export default Header