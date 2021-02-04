import { BrowserRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import TableContainer from './components/Table/TableContainer';

function App() {
  return (    
    <div className="wrapper">
      <BrowserRouter>
      <HeaderContainer/>
        <main className="main-content">
          <TableContainer/>
        </main>
      </BrowserRouter>  
    </div>
  
  )
}

export default App;
