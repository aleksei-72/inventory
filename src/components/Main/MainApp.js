import React, { useState } from 'react';
import CategoriesContainer from '../Categories/CategoriesContainer';
// import Modal from '../Modal/Modal';
import HeaderContainer from './../Header/HeaderContainer';
import TableContainer from './../Table/TableContainer';


const MainApp = (props) => {
    const [fetch, setFetch] = useState(true)
    return (
        <div>
            <div className="wrapper">
                <HeaderContainer />
                <CategoriesContainer/>
                <main className="main-content">
                    <TableContainer fetch = {fetch} setFetch = {setFetch}/>
                </main>
                <div className="download_items_btn__container">
                    <button className="download_items_btn" onClick = { () => setFetch(true) }>Загрузить элементы</button>
                </div>
                

            </div>
        </div>
    )
}

export default MainApp