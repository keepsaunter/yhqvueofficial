import Vue from 'vue';
import Vuex from 'vuex';
import getters from '../getters/static_data_getter'

Vue.use(Vuex);

const state = {
	navigation_bar_data: [
		{ title: '今日推荐', path: '/recomment'},
		{ title: '全部商品', path: '/allgoods'},
		{ title: '人气排行', path: '/popularity'},
		{ title: '销量排行', path: '/sales'},
		{ title: '软件下载', path: '/download'},
	],
	page_size: 100,
}
export default {
	state,
	getters,
}