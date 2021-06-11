import React, { useEffect, useState } from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import style from './../../styles/users.module.css'
import { Redirect, NavLink } from 'react-router-dom';
import ImportsListHeader from './ImportsListHeader';
import ImportsListItem from './ImportsListItem';
import { getImportList } from '../../api/api';
import { useDispatch } from 'react-redux';
import { setImporthData } from '../../reducers/imports';
import loader from './../../img/img/loader/loader.gif';


const ImportsList = (props) => {
  console.log(props)
  const [fetch, setFetch] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    getImportList().then(res => {
      console.log(res)
      dispatch(setImporthData(res))
      setFetch(false)
    })
  }, [])

  if (props.isAuth === false) { return <Redirect to={"/login"} /> }
  if (props.userRole !== 'admin') { return <Redirect to={"/"} /> }

  return (
    <div className={`wrapper`}>
      <HeaderContainer />
      <div className={`${style.imports__wrapper}`}>
        <h2 className={`${style.title}`}>Панель настроек</h2>

        <div className={`${style.button__container} ${style.button__import_container}`}>
          <div className={`${style.links__container}`}>
            <div className={`${style.links__containerItem}`}>          <NavLink to='/users' > <div>Пользователи</div> </NavLink>          </div>
            <div className={`${style.links__containerItem}`}>          <NavLink to='/owners' > <div>Ответственные</div> </NavLink>          </div>
            <div className={`${style.links__containerItem}`}>          <NavLink to='/imports' > <div className={`${style.blue}`}>Импорт</div> </NavLink>          </div>
          </div>
        </div>

        {
          fetch ? <img className="loader" src={loader} /> : <section className={`${style.users__table}`}>
            <ImportsListHeader />
            {
              props.importItems.map((el) => {
                return <ImportsListItem
                  id={el.id}
                  name={el.fileName}
                  status={el.status}
                  username={el.username}
                  date={el.datetime}
                  count={el.count}
                  username={el.targetUser.username}
                  description={el.description}
                />
              })
            }
          </section>
        }
      </div>
    </div>
  )
}

export default ImportsList
