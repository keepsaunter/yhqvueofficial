import Vue from 'vue';
import Vuex from 'vuex';
import getters from '../getters/static_data_getter'

Vue.use(Vuex);

const state = {
	navigation_bar_data: [
		'今日推荐',
		'全部商品',
		'人气排行',
		'销量排行',
		'软件下载',
	]
}
export default {
	state,
	getters,
}