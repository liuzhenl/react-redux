import React , { Component } from 'react'
import { Card, Avatar } from 'antd'
import { connect } from 'react-redux'
import { Button } from 'antd'

class MyCard extends Component {
    // 挂在卸载阶段
    // react数据初始化
    constructor(props) {
        super(props)
        console.log('cart.js 数据初始化')
        this.state = {
            data: props.data,
            num: props.num,
        }
    }
    // 初始化完毕dom渲染前
    // componentWillMount() {
    //     console.log('cart.js 初始化完成dom渲染前')
    // }
    // 组件首次渲染完毕 可以setState
    componentDidMount() {
    }
    // 卸载阶段
    componentWillUnmount() {
        console.log('cart.js 卸载生命周期执行')
    }
    // 生命周期更新阶段
    // 父组件数据变化 子组件接受nextprops 可以和自己的state进行对比进行setState
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps,'cart.js 接受props的生命周期')
    // }
    // 唯一控制组件重新渲染的生命周期
    // 父组件发生变化所有子组件都会重新渲染，可以通过此生命周期控制子组件是否渲染
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState, 'cart.js 控制组件是否重新渲染')
        return true
    }
    // 
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState, 'cart.js---getDerivedStateFromProps 新增生命周期--代替componentWillReceivProps')
        return {
            data: nextProps.data,
            num: nextProps.num
        }  
    }
    // 
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, nextState, 'cart.js 组件进入重新渲染阶段')
    }
    // 
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState, 'cart.js 组件重新渲染完')
    }
    render() {
        // 
        console.log('cart.js 将jsx生成dom结构')
        const { Meta } = Card
        const { data, num } = this.state
        const { subrClick, asynAddTion } = this.props
        return (
            <div>
                <span>Redux中的num{ num }</span> <Button onClick={ subrClick } type="primary">减</Button> 
                <Button onClick={ asynAddTion } type="primary">asyn减</Button>
                <Card
                    style={{ width: 300 }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                >
                    <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={ data.name }
                    description={ data.msg }
                    />
                </Card>
            </div>
        )
    }
}
const addCountAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: 'SUBRACTION', payload: 1})
        },2000)
    }
}
function mapStateToProps({login}) {
	return {
		num:login.num
	}
  }
function mapDispatchToProps(dispatch) {
	return {
	  subrClick: () => dispatch({ type: 'SUBRACTION',payload:1 }),
      asynAddTion: () => dispatch(addCountAsync())
	}
} 

export default connect(
    mapStateToProps,
	mapDispatchToProps
)(MyCard)