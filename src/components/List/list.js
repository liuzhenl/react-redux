import React , { Component } from 'react'
import { List, Avatar } from 'antd'
import { connect } from 'react-redux'
import { Button } from 'antd'

// 无状态组件没有状态和生命周期
class MyList extends Component {
    // 挂在卸载阶段
    // 生命周期初始化react数据
    constructor(props){
        super(props)
        console.log('list 数据初始化',)
        this.state = {
            data: [],
            item: '',
            num:props.num
        }
    }
    // 生命周期 react初始化完毕，dom还没有渲染，dom渲染前
    // componentWillMount(){
    //     console.log('list 初始化完成dom渲染前')
    // }
    // 组件dom首次渲染完毕，可以在此生命周期中调用setstate 跟新数据
    componentDidMount() {
        console.log('list.js---componentDidMount组件渲染完毕')
    }
    // 组件卸载生命周期
    componentWillUnmount() {
        console.log('list 卸载生命周期执行')
    }
    // 更新阶段生命周期

    // 父组件props发生改变
    // 父组件传入的输入发生变化执行此生命周期，接受nextProps 在函数内部可以进行比较不同可以setState()使数据更新
    // 可以将props中的数据赋值给state 如果nextProps 于当前的state不同那么可以调用setState更新组件
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps,this.props,this.state, '父组件props发生变化')
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState, 'list.js----shouldComponentUpdate----控制组件是否更新生命周期')
        return true
    }
    // 新增生命周期
    // 代替 componentWillReceiveProps
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState, 'list.js---getDerivedStateFromProps 新增生命周期--代替componentWillReceivProps')
        return {
            data: nextProps.data,
            item: nextProps.item,
            num: nextProps.num
        }  
    }
    // 新增生命周期
    // 代替componentWillUpdate
    // return 的数据将有componentDidUpdate生命周期函数内获取
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState, 'list.js getSnapshotBeforeUpdate--组件更新前拿到dom某些状态')
        return '叫爸爸'
    }
    // 生命周期更新后
    componentDidUpdate(prevProps, prevState, value) {
        console.log(prevProps, prevState, value, 'list.js componentDidUpdate---组件更新完毕后')
    }
    render () {
        // alert('list-render')
        console.log('list.js 将jsx生成dom结构')
        const { data, item, num } = this.state
        const { addClick } = this.props
        return (
            <div>
                <span>Redux中的num{num}</span> <Button onClick={addClick} type="primary">加</Button>
                <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item1 => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<a href="https://ant.design">{item1[item]}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                </List.Item>
                )}
            />
            </div>
            
        )
    }
}
function mapStateToProps({login}) {
	return {
		num:login.num
	}
  }
function mapDispatchToProps(dispatch) {
	return {
	  addClick: () => dispatch({ type: 'ADDTION',payload:1 })
	}
} 
export default connect(
    mapStateToProps,
	mapDispatchToProps
)(MyList)