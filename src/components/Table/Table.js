import React from 'react';
import TableItem from './TableItem';
import TableHeader from './TableHeader';


const Table = (props) => {
    return (
        <section className="main-table">
            <TableHeader/>
            {
                props.tableItems.map((el) => {
                    return <TableItem title = {el.title}
                                      id = {el.id} 
                                      count = {el.count} 
                                      key = {el.id} 
                                      number = {el.number} 
                                    //   comment = {el.comment}
                                    //   categoryTitle = {el.category.title}
                                      />
            })
            }
        </section>
    )
}

export default Table