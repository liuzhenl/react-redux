// home reducers
// logged状态,num状态

const defaultState = {
	logged:false,
	num:0
}
const home = (state = defaultState, action = {type:null, payload: null}) => {
	const { num } = state;
	switch (action.type) {
		case 'CHANGE_LOGGED':
			return Object.assign({},state,{logged:action.payload})
		case 'CHANGE_USERNAME':
			return Object.assign({},state,{num:num+1})
		default:
			return state
	}
}

export default home