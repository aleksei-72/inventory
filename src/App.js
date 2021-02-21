import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainApp from './components/Main/MainApp';
import LoginContainer from './components/Login/LoginContainer';
import store from './store';

function App() {
	if( localStorage.getItem('token') ) { store.getState().authReducer.isAuth = true }
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact render={() => <MainApp />} />
				<Route path='/login' exact render={() => <LoginContainer />} />
			</Switch>
		</BrowserRouter>

	)
}

export default App;


