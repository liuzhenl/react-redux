
import React from 'react'
import { BrowserRouter, Switch} from "react-router-dom"
// import RouteWithSubRoutes from './RouteWithSubRoutes'
import AuthorizedRoute from './AuthorizedRoute'
import {
	Redirect,
  } from "react-router-dom"
import routers from './routes'
//redux相关
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducer from './redux/reducer'
// redux 中间件
import { default as thunk } from 'redux-thunk'
import { createLogger } from 'redux-logger'

const logger = createLogger()
const middleware = [thunk, logger]
const store = createStore(
	reducer,
	applyMiddleware(...middleware)
)

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					{routers.map((route, i) => (
						<AuthorizedRoute key={i} {...route} />
					))}
					<Redirect path="/" to="/user/login" />
				</Switch>
			</BrowserRouter>
		</Provider>
	)

}
export default App
