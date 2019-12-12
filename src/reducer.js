//！！！！！！！！！！！！！！已经废弃了！！！！！！！！！！！！！！！！

//redux
// 基础概念和API
// 1：Store
// Store 是保存数据的地方，可以看成一个容器。整个应用只有一个store。
// import {createStore} from 'redux'
// const store = createStore(reducer)
// 2：State
// Store 对象包含所有数据。如果想要得到某个时点的数据，就要对Store生成快照。这种时点的数据集合就叫做State。
// 当前时刻的State可以通过 store.getState()拿到。

//reducer原始写法
// const reducer = (state = { logged: false }, action) =>{
//   const { logged } = state;
//   switch (action.type) {
//     case 'CHANGE_LOGGED':
// 	  return { logged: !logged }
//     default:
//       return state
//   }
// }
//reducer 拆分
// Reducer 函数负责生成 State。
// 由于整个应用只有一个 State 对象，包含所有数据，对于大型应用来说，这个 State 必然十分庞大，导致 Reducer 函数也十分庞大。
// const defaultState = {
// 	userlayout:{
// 		logged:false,
// 	},
// 	baselayout:{
// 		num:0,
// 	}
// }
// 拆分前
// const reducers = ( state = defaultState, action={} ) => {
// 	const { type, payload  } = action;
// 	switch (type) {
// 		case 'CHANGE_LOGGED':
// 			return Object.assign({}, state, {userlayout:{logged:payload}})
// 		case 'CHANGE_USERNAME':
// 			return Object.assign({}, state, {baselayout:{num:payload}})
// 		default:
// 			return state
// 	}
// }

// 官方提供的reducers 它会将reducers拆分出来的函数整合到一起
import { combineReducers } from 'redux';
// 引入拆分的reducers
import { changeLogged, changeUserName} from './reducers.js';
// import 导入的是下面的两个函数，就是拆分出来的小函数
// 拆分后
// 拆分出来的处理change_logged
// const changeLogged = (logged, { type, payload }) => {
// 	if( type === 'CHANGE_LOGGED'){
// 		return Object.assign({},{logged:payload})
// 	} else {
// 		return Object.assign({},{logged})
// 	}
// }
// const changeUserName = (num, { type, payload }) => {
// 	if(type === 'CHANGE_USERNAME'){
// 		return Object.assign({},{num:num++})
// 	} else {
// 		return Object.assign({},{num})
// 	}
// }
// 初始化state
const defaultState = {
	userlayout:{
		logged:false,
	},
	baselayout:{
		num:0,
	}
}
// 自定义reducer拆分
// const reducer = ( state = defaultState, action={} ) => {
// 	return {
// 		userlayout:changeLogged(state.userlayout.logged,action),
// 		baselayout:changeUserName(state.baselayout.num,action),
// 	}
// }
// 官方提供的合并拆分后的reducers函数
const reducers = combineReducers({
	userlayout:changeLogged,
	baselayout:changeUserName,
})


export default reducers