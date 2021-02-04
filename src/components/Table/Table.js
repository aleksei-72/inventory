import React from 'react';
import TableItem from './TableItem';
import TableHeader from './TableHeader';

const Table = (props) => {
    return (
        <section className="main-table">
            <TableHeader/>
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
        </section>
    )
}

export default Table