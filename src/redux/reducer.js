// 官方提供的reducers 它会将reducers拆分出来的函数整合到一起
import { combineReducers } from 'redux';
// 引入拆分的reducers
import login from './reducers/login';

// 官方提供的合并拆分后的reducers函数
const reducers = combineReducers({
	login,
})


export default reducers