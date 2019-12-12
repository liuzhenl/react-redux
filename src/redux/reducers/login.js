// login reducers
// logged状态,num状态

const defaultState = {
	logged:false,
	num:0
}
const login = (state = defaultState, action = {}) => {
	const { num } = state;
	switch (action.type) {
		case 'CHANGE_LOGGED':
			return Object.assign({},state,{logged:action.payload});
		case 'CHANGE_USERNAME':
			return Object.assign({},state,{num:num+1});
		default:
			return state;
	}
}

export default login