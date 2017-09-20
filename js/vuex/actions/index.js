export default {
	navClick: (context, index) => {
		context.commit('updateNavChecked', index)
	}
}