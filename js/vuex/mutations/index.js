export default {
	updateNavChecked: (state, index) => {
		state.navigation_checked = index;
	},
	updateFirCatChecked: (state, index) => {
		state.first_catalog_checked = index;
	},
	updateSecCatChecked: (state, index) => {
		state.second_catalog_checked = index;
	}
}