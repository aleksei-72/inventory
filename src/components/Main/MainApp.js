import React from 'react';
import CategoriesContainer from '../Categories/CategoriesContainer';
// import Modal from '../Modal/Modal';
import HeaderContainer from './../Header/HeaderContainer';
import TableContainer from './../Table/TableContainer';


const MainApp = (props) => {
    return (
        <div>
            <div className="wrapper">
                <HeaderContainer />
                <CategoriesContainer/>
                <main className="main-content">
                    <TableContainer />
                </main>
            </div>
        </div>
    )
}

export default MainApp