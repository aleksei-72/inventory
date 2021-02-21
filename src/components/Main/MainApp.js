import React from 'react';
import HeaderContainer from './../Header/HeaderContainer';
import TableContainer from './../Table/TableContainer';

const MainApp = (props) => {
    return (
        <div>
            <div className="wrapper">
                <HeaderContainer />
                <main className="main-content">
                    <TableContainer />
                </main>
            </div>
        </div>
    )
}

export default MainApp