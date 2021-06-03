import React, { useState } from 'react';
import style from './../../styles/header.module.css'
import alertIcon from './../../img/icons/Alert.svg'
import alertRedIcon from './../../img/icons/AlertRed.svg'
import searchIcon from './../../img/icons/Search.svg'
import searchIconBtn from './../../img/icons/Search_btn.svg'
// import addIcon from './../../img/icons/Add.svg'
import settingsIcon from './../../img/icons/Settings.svg'
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/auth';
import { getItems, getUsers, getPreviewItems } from '../../api/api';
// import { updateToken } from '../../api/api';
import { setSearchTableItems, setPreviewTableItems, setFirstPageTableItems } from './../../reducers/tableItems';
// import { printItems } from './../../print';
import { NavLink } from 'react-router-dom';
import { setUsersTableItems } from './../../reducers/users';
// import { getRooms, getPreviewItems } from './../../api/api';
import SearchPreviewItem from './SearchPreviewItem';
// import Select from 'react-select';

const Header = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [searchPreviewVisibility, setSearchPreviewVisibility] = useState(false)
    



    // const authOption  = [
    //     { value: 'logout', label: 'Выход' }
    //   ];
    // // console.log(categoriesOption)


    // const customAuthsSelectStyles = {
    //     menu: (provided, state) => ({
    //         ...provided,
    //         width: state.selectProps.width,
    //         borderBottom: '1px dotted pink',
    //         color: state.selectProps.menuColor,
    //         padding: 2,
    //         position: 'absolute',
    //         right: 20,
    //         top: 35
    //     }),
    //     placeholder: () => ({
    //         color:'#282828',
    //         fontSize: 14
    //     }),

    //     singleValue: () => ({
    //         fontSize: 14
    //     }),
    //     dropdownIndicator: () => ({
    //         color:'#282828',
    //         position: 'absolute',
    //         top: 7,
    //         right: 20
    //     }),

    //     control: (_, { selectProps: { width } }) => ({
    //         width: 145,
    //         height: 35,
    //         marginLeft: -10,
    //         hyphens: 'auto'

    //         // border: '1px solid #000'
    //     }),

    // }

    
    // const AuthSelect = () => <Select placeholder={`${props.currentUser.username}`} defaultValue={`${props.currentUser.username}`} styles={customAuthsSelectStyles} options={authOption}  />




    return (
        <header className={style.header}>
            <NavLink to='/'>
                <div onClick = { () => {
                    getItems(0, null, '')
                    .then(res => {
                      console.log(res.data)
                      dispatch(setFirstPageTableItems(res.data.items))
                    })
                } }>
                    <h1>Inventory.<span className={style.title}>System</span></h1>
                </div>
            </NavLink>

            <div className={style.input_container}>
                <input className={style.search} type="text" placeholder="Поиск" value={search} onChange={(e) => {
                    console.log(e.currentTarget.value)
                    setSearch(e.target.value)
                    console.log(search)
                    getPreviewItems(0, 0, e.currentTarget.value).then( res => {
                        console.log(res)
                        dispatch(setPreviewTableItems(res.data.items, res.data.total_count))
                        setSearchPreviewVisibility(true)
                    } )
                }}
                
                />
                {/* onBlur = {() => setTimeout(setSearchPreviewVisibility(false), 1000)} */}
                <img src={searchIcon} alt="search" className={style.search_icon} />
                <button onClick={() => getItems(0, 0, search).then((res) => {
                    console.log(res.data)
                    dispatch(setSearchTableItems(res.data.items, search))
                    setSearchPreviewVisibility(false)

                })} className={style.search_button}>
                    <img src={searchIconBtn} alt="search" className={style.search_icon} />
                </button>



                {/* {searchPreviewVisibility && <div className={style.search_preview__container}>
                    {props.previewTotal !==0 && <div className={style.search_preview__total}>Найдено записей: {props.previewTotal} </div>}
                    {
                        props.previewItems.map((el) => {
                            console.log(el)
                            return <SearchPreviewItem
                                setSearchPreviewVisibility={setSearchPreviewVisibility}
                                id={el.id}
                                title={el.title}
                            />
                        })
                    }
                    <div className={style.search_preview__warning}>
                        <img src={props.previewTotal === 0 ? alertRedIcon : alertIcon} />
                        {props.previewTotal !== 0 ? <p>Чтобы увидеть больше вариантов — уточните запрос или нажмите кнопку “Поиск”</p> : <p className={style.search_preview__red_text}>Ваш запрос не был найден</p>}
                    </div>
                </div>} */}
                {searchPreviewVisibility && <div className={style.search_preview__wrapper} onClick = { () => setSearchPreviewVisibility(false)}>
                    <div className={style.search_preview__container}>
                        {props.previewTotal !== 0 && <div className={style.search_preview__total}>Найдено записей: {props.previewTotal} </div>}
                        {
                            props.previewItems.map((el) => {
                                console.log(el)
                                return <SearchPreviewItem
                                    setSearchPreviewVisibility={setSearchPreviewVisibility}
                                    id={el.id}
                                    title={el.title}
                                />
                            })
                        }
                        <div className={style.search_preview__warning}>
                            <img src={props.previewTotal === 0 ? alertRedIcon : alertIcon} alt="alert"/>
                            {props.previewTotal !== 0 ? <p>Чтобы увидеть больше вариантов — уточните запрос или нажмите кнопку “Поиск”</p> : <p className={style.search_preview__red_text}>Ваш запрос не был найден</p>}
                        </div>
                    </div>
                </div>}

            </div>



            <div className={style.button_container}>

                
                { props.currentUser.role === "admin" && <NavLink to = "/users">
                    <button onClick = { () => getUsers().then( res => {
                        console.log(res)
                        dispatch(setUsersTableItems(res))
                    } ) } className={style.settings_button}> Настройки
                        <img src={settingsIcon} alt="settings" className={style.settings_icon}/>
                     </button>
                </NavLink>}











                {/* <AuthSelect /> */}
                <button onClick={() => dispatch(logout())} className={style.logout_link}>Выйти из системы</button>
            </div>
            
        </header>

    )
}

export default Header