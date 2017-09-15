import Vue from 'vue';
import Vuex from 'vuex';

import getters from '../getters/style_getter';

Vue.use(Vuex);

const default_content_width = '1200px';
const default_image_root_path = '../../../static/images/';

const state = {
	head_width: default_content_width,
	image_root_path: default_image_root_path,
}
export default{
	state,
	getters
}