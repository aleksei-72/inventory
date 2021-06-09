import React, { useEffect, useState } from 'react';
import TableItem from './TableItem';
import TableHeader from './TableHeader';
import { Redirect } from 'react-router-dom';
import { getItems, getMe, getProfiles, getUsers, setDefaultAppValues } from '../../api/api';
import { useDispatch } from 'react-redux';
import { setRooms, setTableItems } from './../../reducers/tableItems';
import { setUsersTableItems } from './../../reducers/users';
import { getCategories, getRooms } from './../../api/api';
import { setCategoriesItems } from './../../reducers/categories';
import { setOwnersTableItems } from './../../reducers/owners';
import { setUserData } from '../../reducers/auth';
import dragScroll from './../../dragScroll';
import {clearAuthorization} from "../../axios";

const Table = (props) => {
  console.log(props)
  const dispatch = useDispatch()
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  // const [fetch, setFetch] = useState(true)
  const [totalCount, setTotalCount] = useState(20)
  // console.log("fetch ------------------------- ",fetch)

  useEffect(() => {
    let cleanupFunction = false;
    if (props.fetch) {
      getItems(currentPage, props.categoryId, props.searchString)
        .then(res => {
          console.log(res.data)
          // console.log(currentPage)
          dispatch(setTableItems(res.data.items, props.categoryId))
          setItems([...items, ...res.data.items])
          setCurrentPage(prevVal => prevVal + 50)
          console.log('currentPage----',currentPage)

          setTotalCount(res.data.total_count)

          dragScroll()

        })
        .catch((err) => {
          // setDefaultAppValues(dispatch)
          console.log(err)
        })
        .finally(() => {
          props.setFetch(false)
        })
      // getUsers()
      //   .then(res => {
      //     console.log(res.data)
      //     dispatch(setUsersTableItems(res))
      //     props.setFetch(false)

      //     // setCurrentPage(prevVal => prevVal + 15)
      //   })
      //   .catch((err) => {
      //     setDefaultAppValues(dispatch)
      //     console.log(err)
      //   })
      getCategories().then(res => {
        console.log(res)
        dispatch(setCategoriesItems(res))
        props.setFetch(false)
      })
        .catch((err) => {
          setDefaultAppValues(dispatch)
          console.log(err)
        })
      getProfiles().then(res => {
        console.log(res)
        dispatch(setOwnersTableItems(res))
        props.setFetch(false)        
      })
        .catch((err) => {
          setDefaultAppValues(dispatch)
          console.log(err)
        })
      getRooms().then(res => {
        console.log(res)
        dispatch(setRooms(res))
        props.setFetch(false)
      })
        .catch((err) => {
          setDefaultAppValues(dispatch)
          console.log(err)
        })
    }
    return () => cleanupFunction = true;
  }, [props.fetch])

    useEffect( () => {
      let cleanupFunction = false;
      getMe().then( res => {
        dispatch(setUserData(res.data))
        console.log(res.data)
      } , () => {
          clearAuthorization()
          return <Redirect to={"/login"} />
      })
      return () => cleanupFunction = true;
    }, [] )

//*********************************************************************************************************************************************************************************************** */
  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler)
  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler)
  //   }
  // })

  // const scrollHandler = (e) => {
  //   if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 150 && items.length < totalCount) {
  //     setFetch(true)




  //   }
  // }
//*********************************************************************************************************************************************************************************************** */



  if (props.isAuth === false) { return <Redirect to={"/login"} /> }

  return ( 
    <section className="main-table">
      <TableHeader />
      {
        props.tableItems.map((el) => {
          let checkItem = item => {
            if (!item) item = []
            return item
          }

          let checkNumber= item => {
            if (!item) item = 0
            return item
          }

          // console.log(el)
          return <TableItem 
            title={el.title}
            id={el.id}
            count={checkNumber(el.count)}
            price={checkNumber(el.price)}

            key={el.id}
            number={el.number}

            
            // cost={el.count ? parseInt(el.count.match(/\d+/)) * el.price : el.price}
            // cost={el.count && parseInt(el.count.match(/\d+/)) * el.price}

            // cost={parseInt(el.count, 10) * el.price}
            // test={parseInt(el.count, 10)}

            comment={el.comment}
            categoryTitle={el.category ? el.category.title : "Не указано"}
            categoryId={el.category ? el.category.id : "Нет id"}
            owner={checkItem(el.profile)}
            location={checkItem(el.rooms)}
            deleteItem={props.deleteTableItem}
            updateItem={props.updateTableItem}
            usersTableItems={props.usersTableItems}
            categoriesItems={props.categoriesItems}
            ownersTableItems={props.ownersTableItems}
            roomsItems={props.roomsItems}
            currentUser = {props.currentUser}
          />
        })
      }
      {/* <button className="download_items_btn" onClick = { () => setFetch(true) }>Загрузить элементы</button> */}
    </section>
  )
}




export default Table