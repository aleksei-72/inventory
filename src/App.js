import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainApp from './components/Main/MainApp';
import LoginContainer from './components/Login/LoginContainer';
import store from './store';
import UsersContainer from './components/Users/UsersContainer';
import OwnersContainer from './components/Owners/OwnersContainer';
import ImportsListContainer from './components/ImportsList/ImportsListContainer';
import { getAuthorization } from "./axios";
import RoutingMiddleWare from "./routing-middleware"


function App() {
	if (getAuthorization()) {
		store.getState().authReducer.isAuth = true 
	}
	return (
		<BrowserRouter>

			<Switch>
				<Route path='/' exact render={() => RoutingMiddleWare(['isAuth'], <MainApp data={store.getState()} />)} />
				<Route path='/login' exact render={() => <LoginContainer />} />
				<Route path='/users' exact render={() => RoutingMiddleWare(['isAuth', 'isAdmin'], <UsersContainer />)} />
				<Route path='/owners' exact render={() => RoutingMiddleWare(['isAuth', 'isAdmin'], <OwnersContainer />)} />
				<Route path='/imports' exact render={() => RoutingMiddleWare(['isAuth', 'isAdmin'], <ImportsListContainer />)} />
			</Switch>
		</BrowserRouter>
		
	)
}

export default App;


