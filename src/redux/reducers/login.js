// login reducers
// logged状态,num状态

const defaultState = {
	logged:true,
	num:0
}
const login = (state = defaultState, action = {type: null, payload: null}) => {
	const { num } = state
	switch (action.type) {
		case 'CHANGE_LOGGED':
			return Object.assign({}, state, {logged: action.payload})
		case 'ADDTION':
			return Object.assign({}, state, {num: num+1})
		case 'SUBRACTION':
			return Object.assign({}, state, {num: num-1})
		default:
			return state
	}
}

export default login