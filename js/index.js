import Vue from 'vue';
import store from './vuex/store';
import Index from './components/index/index.vue';
import router from './router'

new Vue({
	el: '#application',
	store,
	router,
	render(h) {
		return h(Index);
	}
})