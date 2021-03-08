import React, { useEffect, useState } from 'react';
import TableItem from './TableItem';
import TableHeader from './TableHeader';
import { Redirect } from 'react-router-dom';
import { getItems } from '../../api/api';
import { useDispatch } from 'react-redux';
import { setTableItems } from './../../reducers/tableItems';


const Table = (props) => {
    const dispatch = useDispatch() 
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetch, setFetch] = useState(true)
    const [totalCount, setTotalCount] = useState(20)
  
    useEffect(() => {
      if(fetch) {
        getItems(currentPage)
        .then(res => {
            dispatch(setTableItems(res.data.items))
            setItems([...items, ...res.data.items])
            setCurrentPage(prevVal => prevVal + 15)
            setTotalCount(res.data.total_count)

        })
        .finally( () => {
          setFetch(false)
        } )
      }    
    }, [fetch])
  
    useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return () => {
        document.removeEventListener('scroll', scrollHandler)
      }
    })

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 150 && items.length < totalCount) {
            setFetch(true)
        }
    }
    if(props.isAuth === false) {return <Redirect to={"/login"}/>}
    return (
        <section className="main-table">
            <TableHeader/>
            {
                props.tableItems.map((el) => {
                    let checkItem = item => {
                        if (!item) item = []
                        return item
                    }                                       
                    return <TableItem title = {el.title}
                                      id = {el.id} 
                                      count = {el.count} 
                                      key = {el.id} 
                                      number = {el.number} 
                                      comment = {el.comment}
                                      categoryTitle = {el.category.title}
                                      owner = {checkItem(el.profile)}
                                      location = {checkItem(el.rooms)}
                                      />
            })
            }
        </section>
    )
}

export default Table