import React, { useEffect, useState } from 'react';
import TableItem from './TableItem';
import TableHeader from './TableHeader';
import { Redirect } from 'react-router-dom';
import { getItems, getProfiles, getUsers, setDefaultAppValues } from '../../api/api';
import { useDispatch } from 'react-redux';
import { setRooms, setTableItems } from './../../reducers/tableItems';
import { setUsersTableItems } from './../../reducers/users';
import { getCategories, getRooms } from './../../api/api';
import { setCategoriesItems } from './../../reducers/categories';
import { setOwnersTableItems } from './../../reducers/owners';

const Table = (props) => {
  console.log(props)
  const dispatch = useDispatch()
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [fetch, setFetch] = useState(true)
  const [totalCount, setTotalCount] = useState(20)
  // console.log("fetch ------------------------- ",fetch)

  useEffect(() => {
    if (fetch) {
      getItems(currentPage, props.categoryId, props.searchString)
        .then(res => {
          console.log(res.data)
          console.log(currentPage)
          dispatch(setTableItems(res.data.items, props.categoryId))
          setItems([...items, ...res.data.items])
          setCurrentPage(prevVal => prevVal + 15)
          setTotalCount(res.data.total_count)
        })
        .catch((err) => {
          // setDefaultAppValues(dispatch)
          console.log(err)
        })
        .finally(() => {
          setFetch(false)
        })
      getUsers()
        .then(res => {
          console.log(res.data)
          dispatch(setUsersTableItems(res))
          setFetch(false)

          // setCurrentPage(prevVal => prevVal + 15)
        })
        .catch((err) => {
          setDefaultAppValues(dispatch)
          console.log(err)
        })
      getCategories().then(res => {
        console.log(res)
        dispatch(setCategoriesItems(res))
        setFetch(false)
      })
        .catch((err) => {
          setDefaultAppValues(dispatch)
          console.log(err)
        })
      getProfiles().then(res => {
        console.log(res)
        dispatch(setOwnersTableItems(res))
        setFetch(false)        
      })
        .catch((err) => {
          setDefaultAppValues(dispatch)
          console.log(err)
        })
      getRooms().then(res => {
        console.log(res)
        dispatch(setRooms(res))
        setFetch(false)
      })
        .catch((err) => {
          setDefaultAppValues(dispatch)
          console.log(err)
        })
    }
  }, [fetch])


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
          console.log(el)
          return <TableItem title={el.title}
            id={el.id}
            count={el.count}
            key={el.id}
            number={el.number}

            price={el.price}
            // cost={el.count ? parseInt(el.count.match(/\d+/)) * el.price : el.price}
            // cost={el.count && parseInt(el.count.match(/\d+/)) * el.price}

            cost={parseInt(el.count, 10) * el.price}
            test={parseInt(el.count, 10)}

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
          />
        })
      }
      <button className="download_items_btn" onClick = { () => setFetch(true) }>Загрузить элементы</button>
    </section>
  )
}




export default Table