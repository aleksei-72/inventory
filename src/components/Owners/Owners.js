import React from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import style from './../../styles/users.module.css'
// import { getUsers } from '../../api/api';
// import { useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
// import UsersTableItem from '../Users/UsersTableItem';
// import { setUsersTableItems } from '../../reducers/users';
// import UsersTableHeader from '../Users/UsersTableHeader';
import addIcon from './../../img/icons/Add.svg'
import OwnersTableHeader from './OwnersTableHeader';
import OwnersTableItem from './OwnersTableItem';
// import { addTableOwnerItem } from './../../api/api';
// import { getProfiles } from './../../api/api';


const Owners = (props) => {
  console.log(props)
  if (props.isAuth === false) { return <Redirect to={"/login"} /> }

  return (
    <div className={`wrapper`}>
      <HeaderContainer />
      <div className={`${style.users__wrapper} ${style.owners__wrapper}`}>
        <h2 className={`${style.title}`}>Панель настроек</h2>


        <div className={`${style.button__container}`}>
          <div className={`${style.links__container}`}>
            <div className={`${style.links__containerItem}`}>          <NavLink to='/users' > <div>Пользователи</div> </NavLink>          </div>
            <div className={`${style.links__containerItem}`}>          <NavLink to='/owners' > <div>Ответственные</div> </NavLink>          </div>
            <div className={`${style.links__containerItem}`}>          <NavLink to='/imports' > <div>Импорт</div> </NavLink>          </div>
          </div>
          <button onClick={() => props.addTableOwnerItem()} className={style.add_item_button}>Добавить ответственного
                    <img src={addIcon} alt="add" className={style.button_icon} />
          </button>
        </div>


        
        <section className={`${style.users__table} ${style.owners__table}`}>
          <OwnersTableHeader />
          {
            props.ownersTableItems.map((el) => {
              return <OwnersTableItem
                id={el.id}
                name={el.name}
                // role={el.role}
                // username={el.username}
                // blocked={el.blocked}
                // lastActiveAt={el.lastActiveAt}
                deleteTableOwnerItem = {props.deleteTableOwnerItem}
                updateOwner = {props.updateTableOwnerItem}
              />
            })
          }
        </section>
      </div>

    </div>
  )
}

export default Owners