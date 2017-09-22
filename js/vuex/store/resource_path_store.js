import Vue from 'vue';
import Vuex from 'vuex';
import getters from '../getters/resource_path_getter';

Vue.use(Vuex);


const state = {
	img_head_bk: require('../../../static/images/head_bk.png'),
	img_logo: require('../../../static/images/logo.png'),
	img_search_ico: require('../../../static/images/search_ico.png'),
	img_scroll_top: require('../../../static/images/scroll_top.png'),
	img_default_goods: require('../../../static/images/default_goods_img.jpg'),
}
export default{
	state,
	getters,
}