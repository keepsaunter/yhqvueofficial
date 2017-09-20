import Vue from 'vue';
import Vuex from 'vuex';
import getters from '../getters/remote_data_getter';
import actions from '../actions/remote_data_action';
import mutations from '../mutations/remote_data_mutation';

Vue.use(Vuex);

const state = {
	recomment_goods: [],
	popularity_goods: [],
	sales_goods: [],
	remote_server_root: 'http://www.fanqianzhushou.com',
	remote_recomment_path: '/tj/day.htm',
	remote_popularity_path: '/tj/rqph.htm',
	remote_sales_path: '/tj/sspd.htm',
}
export default {
	state,
	getters,
	actions,
	mutations,
}