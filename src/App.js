
import React from 'react'
import { BrowserRouter, Switch ,Route,Redirect } from "react-router-dom";
import BaseLayout from './layout/BaseLayout';
import UserLayout from './layout/UserLayout';
import AuthorizedRoute from './AuthorizedRoute';

//redux相关
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';

const store = createStore(reducer);

const App = () => {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route path='/user/login' component={UserLayout} />
						<AuthorizedRoute path='/user' component={BaseLayout}/>
						<Redirect to="/user/login" />
					</Switch>
				</BrowserRouter>
			</Provider>
		)
	
}

export default App;
