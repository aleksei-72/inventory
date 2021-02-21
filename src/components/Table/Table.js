import React from 'react';
import TableItem from './TableItem';
import TableHeader from './TableHeader';
import { Redirect } from 'react-router-dom';


const Table = (props) => {
    if(props.isAuth === false) return <Redirect to={"/login"}/>
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