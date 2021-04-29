import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainApp from './components/Main/MainApp';
import LoginContainer from './components/Login/LoginContainer';
import store from './store';
import UsersContainer from './components/Users/UsersContainer';

function App() {
	if ( localStorage.getItem('token') ) { 
		store.getState().authReducer.isAuth = true 
	}
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact render={() => <MainApp />} />
				<Route path='/login' exact render={() => <LoginContainer />} />
				<Route path='/users' exact render={() => <UsersContainer />} />
			</Switch>
		</BrowserRouter>

	)
}

export default App;


