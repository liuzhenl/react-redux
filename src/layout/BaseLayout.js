import React , { Component } from 'react';
import { Route , Link ,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

class BaseLayout extends Component{
	render(){
		const { logoutClick, routes } = this.props;
		return (
			<div className="base" style={{width:'100%',height:'40px',background:'red',}}>
				<header>
					<span>React路由Router v4 Browser Example</span><button style={{float:'right'}} onClick={logoutClick}>logout</button>
					<nav>
					<ul style={{height:'50px',background:'rgb(234, 223, 223)',padding:'0px',margin:'0px'}}>
						{routes.map((route,i) => (
							<li key={i} style={{float:'left',width:'100px',color:'#ffffff',padding:'20px',boxSizing:'border-box',size:'12px'}}>
								<Link to={route.path}>{route.name}</Link>
							</li>
						))}
					</ul>
					</nav>
				</header>
				<div>
					
				</div>
				<div className="container"  style={{width:'100%',height:'400px',background:'blue'}}>
					<Switch>
						{routes.map((route,i) => (
							<RouteWithSubRoutes key={i} {...route}/>
						))}
					</Switch>
				</div>
				<footer  style={{width:'100%',height:'50px',background:'pink'}}>
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