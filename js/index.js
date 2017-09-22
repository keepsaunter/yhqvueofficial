import Vue from 'vue';
import store from './vuex/store';
import Index from './components/index/index.vue';
import router from './router';
import Base from './base';

Vue.use(Base);

new Vue({
	el: '#application',
	store,
	router,
	render(h) {
		return h(Index);
	}
})