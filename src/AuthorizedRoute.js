import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from 'react-redux'


class AuthorizedRoute extends React.Component {
	render() {
		const { component:Component, logged, ...rest } = this.props;
		return (
			<Route
				{...rest}
				render={props => {
					return logged
						? <Component />
						: <Redirect to="/login" />
					}
				}
			 />
		)
	}
}
function mapStateToProps({login}) {
	return {
		logged:login.logged
	}
  }

export default connect(
	mapStateToProps,
)(AuthorizedRoute)