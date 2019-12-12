
import React from 'react'
import { BrowserRouter, Switch ,Route } from "react-router-dom";
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
						<Route path='/login' component={UserLayout} />
						<AuthorizedRoute path='/' component={BaseLayout}/>
					</Switch>
				</BrowserRouter>
			</Provider>
		)
	
}

export default App;
