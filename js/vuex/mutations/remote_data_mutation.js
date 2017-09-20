export default {
	updateRecommentGoods: (state, newData) => {
		state.recomment_goods = newData;
	},
	updatePopularityGoods: (state, newData) => {
		state.popularity_goods = newData;
	},
	updateSalseGoods: (state, newData) => {
		state.sales_goods = newData;
	}
}