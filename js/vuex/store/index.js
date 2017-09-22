import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import styleStore from './style_store';
import resourceStore from './resource_path_store';
import staticDataStore from './static_data_store';
import remoteDataStore from './remote_data_store';

import getters from '../getters';
import mutations from '../mutations';
import actions from '../actions';

Vue.prototype.axios = axios;

Vue.use(Vuex);
const state = {
	navigation_checked: 0,
	first_catalog_checked: 0,
	second_catalog_checked: -1,
	search_input_val: '',
}
export default new Vuex.Store({
	modules:{
		styleStore,
		resourceStore,
		staticDataStore,
		remoteDataStore,
	},
	state,
	getters,
	mutations,
	actions,
})