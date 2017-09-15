import Vue from 'vue';
import Vuex from 'vuex';
import styleStore from './style_store';
import resourceStore from './resource_path_store';

import getters from '../getters/index'

Vue.use(Vuex);
const state = {
}
export default new Vuex.Store({
	modules:{
		styleStore,
		resourceStore,
	},
	state,
	getters
})