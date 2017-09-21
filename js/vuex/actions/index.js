export default {
	navClick: (context, index) => {
		context.commit('updateNavChecked', index);
	},
	firstCatalogClick: (context, index) => {
		context.commit('updateFirCatChecked', index);
		context.commit('updateSecCatChecked', -1);
	},
	secondCatalogClick: (context, index) => {
		context.commit('updateSecCatChecked', index);
	}
}