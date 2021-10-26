import React from "react";
import {
  Route
} from "react-router-dom";
import { connect } from 'react-redux'
import UserLayout from "./layout/UserLayout";


class AuthorizedRoute extends React.Component {
	render() {
		const { component:Component, logged, routes, ...rest } = this.props;
		// console.log(this.props, 'anthorizedRoute------')
		if ( logged ) {
			return (
				<Route
					{...rest}
					render={ props =>  <Component routes={ routes } />}
				 />
			)
		} else {
			return (
				<Route
					{...rest}
					path="/user/login"
					render={ props =>  <UserLayout /> }
			 	/>
			)
		}
		
	}
}
function mapStateToProps({login}) {
	return {
		logged: login.logged
	}
  }

export default connect(
	mapStateToProps,
)(AuthorizedRoute)