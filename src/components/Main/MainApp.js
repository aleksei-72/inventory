import React, { useState } from 'react';
import CategoriesContainer from '../Categories/CategoriesContainer';
import HeaderContainer from './../Header/HeaderContainer';
import TableContainer from './../Table/TableContainer';
import loader from './../../img/img/loader/loader.gif';

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
                    {
                        fetch ? <img className="loader" src ={loader}/> : <button className="download_items_btn" onClick = { () => setFetch(true) }>Загрузить элементы</button>
                    }                    
                </div>
                

            </div>
        </div>
    )
}

export default MainApp