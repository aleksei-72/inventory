import React, { useState } from 'react';
import style from './../../styles/header.module.css'
// import printIcon from './../../img/icons/Print.svg'
import searchIcon from './../../img/icons/Search.svg'
import searchIconBtn from './../../img/icons/Search_btn.svg'
// import addIcon from './../../img/icons/Add.svg'
import settingsIcon from './../../img/icons/Settings.svg'
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/auth';
import { getItems, getUsers, getPreviewItems } from '../../api/api';
// import { updateToken } from '../../api/api';
import { setSearchTableItems, setPreviewTableItems } from './../../reducers/tableItems';
// import { printItems } from './../../print';
import { NavLink } from 'react-router-dom';
import { setUsersTableItems } from './../../reducers/users';
// import { getRooms, getPreviewItems } from './../../api/api';
import SearchPreviewItem from './SearchPreviewItem';

const Header = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    const [search, setSearch] = useState(' ')
    const [searchPreviewVisibility, setSearchPreviewVisibility] = useState(false)
    return (
        <header className={style.header}>
            <NavLink to='/'>
                <div>
                    <h1>Inventory.<span className={style.title}>System</span></h1>
                </div>
            </NavLink>

            <div className={style.input_container}>
                <input className={style.search} type="text" placeholder="Поиск" value={search} onChange={(e) => {
                    console.log(search)
                    setSearch(e.target.value)
                    getPreviewItems(0, 0, search).then( res => {
                        console.log(res)
                        dispatch(setPreviewTableItems(res.data.items, res.data.total_count))
                        setSearchPreviewVisibility(true)
                    } )
                }} />
                <img src={searchIcon} alt="search" className={style.search_icon} />
                <button onClick={() => getItems(0, 0, search).then((res) => {
                    console.log(res.data)
                    dispatch(setSearchTableItems(res.data.items, search))
                    setSearchPreviewVisibility(false)

                })} className={style.search_button}>
                    <img src={searchIconBtn} alt="search" className={style.search_icon} />
                </button>



                {searchPreviewVisibility && <div className={style.search_preview__container}>
                    <div className={style.search_preview__total}>Найдено записей: {props.previewTotal} </div>
                    {
                        props.previewItems.map((el) => {
                            console.log(el)
                            return <SearchPreviewItem
                                setSearchPreviewVisibility = {setSearchPreviewVisibility}
                                id={el.id}
                                title={el.title}
                            />
                        })
                    }
                </div>}


            </div>



            <div className={style.button_container}>

    
                <NavLink to = "/users">
                    <button onClick = { () => getUsers().then( res => {
                        console.log(res)
                        dispatch(setUsersTableItems(res))
                    } ) } className={style.settings_button}> Настройки
                        <img src={settingsIcon} alt="settings" className={style.settings_icon}/>
                     </button>
                </NavLink>


                
                <button onClick={() => dispatch(logout())} className={style.logout_link}>Выйти из системы</button>
            </div>
        </header>

    )
}

export default Header