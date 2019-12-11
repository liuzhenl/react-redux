import React , { Component } from 'react'
import { Route , Link ,Switch ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux'

const HomePage = () => <div>Home页面</div>
const RegisterPage = () => <div>Register页面</div>
const ProfilePage = () => <div>Profile页面</div>
const AboutPage = () => <div>About页面</div>
const ContactPage = () => (
	<div>
		<p>ContactPage页面</p><Link to="/contact/add">Contact</Link>
		<div>
			<Switch>
				<Route  path="/contact/add" exact component={ContactAddPage} />
			</Switch>
		</div>
		
	</div>
)
const ContactAddPage = () => <div>ContactAddPage页面</div>

class BaseLayout extends Component{
	render(){
		const { logoutClick } = this.props;
		return (
			<div className="base" style={{width:'100%',height:'40px',background:'red',}}>
				<header>
					<span>React路由Router v4 Browser Example</span><button style={{float:'right'}} onClick={logoutClick}>logout</button>
					<nav>
					<ul style={{height:'50px',background:'rgb(234, 223, 223)',padding:'0px',margin:'0px'}}>
						<li style={{float:'left',width:'100px',color:'#ffffff',padding:'20px',boxSizing:'border-box',size:'12px'}}><Link to="/">Home</Link></li>
						<li style={{float:'left',width:'100px',color:'#ffffff',padding:'20px',boxSizing:'border-box',size:'12px'}}><Link to="/about">About</Link></li>
						<li style={{float:'left',width:'100px',color:'#ffffff',padding:'20px',boxSizing:'border-box',size:'12px'}}><Link to="/me">Profile</Link></li>
						<li style={{float:'left',width:'100px',color:'#ffffff',padding:'20px',boxSizing:'border-box',size:'12px'}}><Link to="/register">Register</Link></li>
						<li style={{float:'left',width:'100px',color:'#ffffff',padding:'20px',boxSizing:'border-box',size:'12px'}}><Link to="/contact">Contact</Link></li>
					</ul>
					</nav>
				</header>
				<div>
					
				</div>
				<div className="container"  style={{width:'100%',height:'400px',background:'blue'}}>
					<Switch>
						<Route exact path="/"  component={HomePage} />
						<Route  path="/about" component={AboutPage} />
						<Route  path="/contact" component={ContactPage} />
						<Route  path="/register" component={RegisterPage} />
						<Route  path="/me" component={ProfilePage} />
						<Redirect to="/" />
					</Switch>
				</div>
				<footer  style={{width:'100%',height:'50px',background:'pink'}}>
					React Router v4 Browser Example (c) 2017
				</footer>
				</div>
		)
	}
}
	
function mapStateToProps({userlayout}) {
	return {
		logged:userlayout.logged
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