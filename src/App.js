import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainApp from './components/Main/MainApp';
import LoginContainer from './components/Login/LoginContainer';
import store from './store';
import UsersContainer from './components/Users/UsersContainer';
import OwnersContainer from './components/Owners/OwnersContainer';
import ImportsListContainer from './components/ImportsList/ImportsListContainer';
import { getAuthorization, setAuthorization } from './axios';

function App() {
	if ( getAuthorization() ) { 
		store.getState().authReducer.isAuth = true
		setAuthorization(getAuthorization())
	}
	return (
		<BrowserRouter>

			<Switch>
				<Route path='/' exact render={() => <MainApp data={store.getState()} />} />
				<Route path='/login' exact render={() => <LoginContainer />} />
				<Route path='/users' exact render={() => <UsersContainer />} />
				<Route path='/owners' exact render={() => <OwnersContainer />} />
				<Route path='/imports' exact render={() => <ImportsListContainer />} />
			</Switch>
		</BrowserRouter>
		
	)
}

export default App;


