import React, { useEffect, useState } from 'react';
import HeaderContainer from './../Header/HeaderContainer';
import style from './../../styles/users.module.css'
import { getImportList, getUsers } from '../../api/api';
import { useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import UsersTableItem from './UsersTableItem';
import { setUsersTableItems } from './../../reducers/users';
import UsersTableHeader from './UsersTableHeader';
import addIcon from './../../img/icons/Add.svg'


const Users = (props) => {
  console.log(props)
  const dispatch = useDispatch()
  // const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [fetch, setFetch] = useState(true)
  console.log("fetch users ------------------------- ", fetch)



  useEffect(() => {
    if (fetch) {
      getUsers(currentPage)
        .then(res => {
          console.log(res.data)
          dispatch(setUsersTableItems(res))
          setCurrentPage(prevVal => prevVal + 15)
        })
        .finally(() => {
          setFetch(false)
        })
    }
  }, [fetch])

  // useEffect( () => {
  //   getImportList().then( res => {
  //     console.log(res)
  //   } )
  // } )

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler)
  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler)
  //   }
  // })

  // const scrollHandler = (e) => {
  //   if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 150 && items.length) {
  //     // setFetch(true)
  //     console.log(e)
  //   }
  // }


  return (
    <div className={`wrapper`}>
      <HeaderContainer />
      <div className={`${style.users__wrapper}`}>
        <h2 className={`${style.title}`}>Панель настроек</h2>

        <div className={`${style.button__container}`}>
          <div className={`${style.links__container}`}>
            <div className={`${style.links__containerItem}`}>          <NavLink to='/users' > <div>Пользователи</div> </NavLink>          </div>
            <div className={`${style.links__containerItem}`}>          <NavLink to='/owners' > <div>Ответственные</div> </NavLink>          </div>
            <div className={`${style.links__containerItem}`}>          <NavLink to='/imports' > <div>Импорт</div> </NavLink>          </div>
          </div>
          <button onClick={props.addTableUserItem} className={style.add_item_button}>Добавить пользователя
                    <img src={addIcon} alt="add" className={style.button_icon} />
          </button>
        </div>


        <section className={`${style.users__table}`}>
          <UsersTableHeader />
          {
            props.usersTableItems.map((el) => {
              return <UsersTableItem
                id={el.id}
                key={el.id}
                name={el.name}
                role={el.role}
                username={el.username}
                blocked={el.blocked}
                lastActiveAt={el.last_active_at}
                deleteTableItem={props.deleteTableItem}
                updateUser={props.updateTableUserItem}
                updateUserPassword={props.updateTableUserPassword}
                deletedAt = {el.deleted_at}
              />
            })
          }
        </section>
      </div>

    </div>
  )
}

export default Users