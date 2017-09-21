export default {
	updateRecommentGoods: (state, newData) => {
		state.recomment_goods = newData;
	},
	updatePopularityGoods: (state, newData) => {
		state.popularity_goods = newData;
	},
	updateSalseGoods: (state, newData) => {
		state.sales_goods = newData;
	},
	updateAllGoods: (state, newData) => {
		state.all_goods = newData;
	},
	updateCatalogs: (state, newData) => {
		state.catalogs = newData;
	}
}