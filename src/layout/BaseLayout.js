import React , { Component } from 'react'
import { Link ,Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import RouteWithSubRoutes from '../RouteWithSubRoutes'
import { Button, Space } from 'antd'
import './baselayout.less'

class BaseLayout extends Component{
	render(){
		console.log(this.props,'baselayout----props')
		const { logoutClick, routes } = this.props;
		return (
			<div className="base container">
				<header className="navbar">
					<nav>
						<ul>
							{routes.map((route,i) => (
								<li key={i} style={{float:'left',width:'100px',color:'#ffffff',padding:'20px',boxSizing:'border-box',size:'12px'}}>
									<Link to={route.path}>{route.name}</Link>
								</li>
							))}
						</ul>
					</nav>
					{/* <span>React路由Router v4 Browser Example</span> */}
					{/* <button style={{float:'right',color:'#ffffff'}} onClick={}>logout</button> */}
					<Button
						style={{float:'right',marginRight: '10px'}}
						type="primary"
						onClick={logoutClick}
					>
						out
					</Button>
				</header>
				<div>
					
				</div>
				<div className="body">
					<Switch>
						{routes.map((route,i) => (
							<RouteWithSubRoutes key={i} {...route}/>
						))}
					</Switch>
				</div>
				<footer className="footer">
					React Router v4 Browser Example (c) 2017
				</footer>
			</div>
		)
	}
}
	
function mapStateToProps({login}) {
	return {
		logged:login.logged
	}
  }
function mapDispatchToProps(dispatch) {
	return {
	  logoutClick: () => dispatch({ type: 'CHANGE_LOGGED',payload:false })
	}
} 
 

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BaseLayout)