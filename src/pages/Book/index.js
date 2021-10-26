import React , { Component } from 'react'
import { Button } from 'antd'
import List from '../../components/List/list'
import Cart from '../../components/Cart/Cart'

class Book extends Component {
	// 挂载卸载阶段生命周期
	constructor(props){
		super(props)
		// 初始化react数据 可以不写，写了constructor必须写super
		console.log('book index.js 数据初始化')
		this.state = {
			name: 'Book',
			data: [
				{name: '张三'},
				{name: '李四'},
				{name: '王五'},
				{name: '赵六'}
			],
			dataKey: [
				{name: '张三', id:'zhangsan'},
				{name: '李四', id:'lisi'},
				{name: '王五', id:'wangwu'},
				{name: '赵六', id:'zhaoliu'}
			],
			antd_list: [
				{title: '周一 晴'},
				{title: '周二 晴'},
				{title: '周三 晴'},
				{title: '周四 高能预警'},
				{title: '周五 高能预警~'}
			],
			item: 'title',
			cart_data: {
				name: '张三',
				msg: '前端工程师'
			}
		}
	}
	// 旧版本组件
	// componentWillMount() {
	// 	// 代码数据初始化后但是还未渲染dom
	// 	console.log('book index.js 初始化完成dom渲染前')
	// }
	componentDidMount() {
		// 组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
		console.log('book index.js 组件渲染完毕')
		// this.setTimeFn()
	}
	componentWillUnmount() {
		// 此处完成了组件的卸载和数据的销毁
		console.log('book index.js 卸载生命周期执行')
		console.log(this.state,'组件销毁后访问state')
		// this.clearTimeFn()
	}
	// 更新阶段生命周期
	// fu组件数据发生变化的时候
	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps,'book index.js 父组件props发生变化')
	// }
	// 定时器
	setTimeFn = () => {
		this.timer = setTimeout(() => {
			this.setState({
				antd_list: [
					{title: '周一 阴'},
					{title: '周二 阴'},
					{title: '周三 阴'},
					{title: '周四 高能预警~'},
					{title: '周五 高能预警~'}
				]
			})
		},2000)
	}
	// 清楚定时器
	clearTimeFn = () => {
		clearTimeout(this.timer)
	}
	// 按钮点击事件
	handelClick = () => {
		console.log('点击按钮了')
		this.setState({
			antd_list: [
				{title: '周一 出去浪'},
				{title: '周二 出去浪'},
				{title: '周三 出去浪'},
				{title: '周四 出去浪高能预警~'},
				{title: '周五 出去浪预警~'}
			],
			cart_data: {
				name: '王八犊子',
				msg: '前端工程师'
			}
		})
	}
	render() {
		console.log('book index.js 将jsx生成dom结构')
		const { name, antd_list, item, cart_data } = this.state
		return (
			<div>
				<h1>{name}</h1>
				{/* <ul>
					{data.map((item, index) => (
						<li id="item.name">{item.name}   <Button type="primary">Primary Button</Button></li>
					))}
				</ul> */}
				<div>
					<List data={ antd_list } item={ item } />
					<div><Button type="primary" onClick={ this.handelClick }>Button</Button></div>
				</div>
				<Cart data={ cart_data } />
			</div>
		)
	}
}

export default Book