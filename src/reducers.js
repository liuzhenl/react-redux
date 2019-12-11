// 自定义拆分reducer
// logged状态
const changeLogged = (logged, { type, payload }) => {
	if( type === 'CHANGE_LOGGED'){
		return Object.assign({},{logged:payload})
	} else {
		return Object.assign({},{logged})
	}
}
// username状态
const changeUserName = (num, { type, payload }) => {
	if(type === 'CHANGE_USERNAME'){
		return Object.assign({},{num:num++})
	} else {
		return Object.assign({},{num})
	}
}


module.exports = {
	changeLogged,
	changeUserName,
}