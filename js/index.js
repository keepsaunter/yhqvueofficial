import Vue from 'vue';
import store from './vuex/store';
import Index from './components/index/index.vue';

new Vue({
	el: '#application',
	store,
	render(h) {
		return h(Index);
	}
})