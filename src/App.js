
import React from 'react'
import { BrowserRouter, Switch} from "react-router-dom";
import RouteWithSubRoutes from './RouteWithSubRoutes';
import routers from './routes';
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
					{routers.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
			</BrowserRouter>
		</Provider>
	)

}
export default App;
