import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './userlayout.less'

class UserLayout extends Component {
	componentDidMount(){
		console.log(this.props,'propsLogin')
	};
	// handelClick= () => {
	// 	const { loginClick,history } = this.props;
	// 	loginClick();
	// 	history.replace("/");
	// };
	handleSubmit = e => {
		e.preventDefault();
		const { loginClick, history } = this.props;
		this.props.form.validateFields((err, values) => {
		  if (!err) {
			//表单验证成功
			console.log('validOk', values);
			//发送ajax请求
			// code...
			//请求成功改变登陆状态
			loginClick();
			//跳转首页
			history.replace("/");
		  }
		});
	  };
	render(){
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="logincontent">
				<Form onSubmit={this.handleSubmit} className="loginform">
					<Form.Item>
					{getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input your username!' }],
					})(
						<Input
						prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder="Username"
						/>,
					)}
					</Form.Item>
					<Form.Item>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					})(
						<Input
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password"
						placeholder="Password"
						/>,
					)}
					</Form.Item>
					<Form.Item>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(<Checkbox>记住密码</Checkbox>)}
					<a className="loginformforgot" href="">
						忘记密码
					</a>
					<Button type="primary" htmlType="submit" className="loginformbutton">
						Log in
					</Button>
					</Form.Item>
		  		</Form>
		  	</div>
		)
	}
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(UserLayout);

function mapStateToProps({userlayout}) {
	return {
		logged:userlayout.logged
	}
}
function mapDispatchToProps(dispatch) {
	return {
	  loginClick: () => dispatch({ type: 'CHANGE_LOGGED' ,payload:true})
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedNormalLoginForm)