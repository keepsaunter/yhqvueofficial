import Vue from 'vue';
import VueRouter from 'vue-router';
import RecoContent from '../components/content/recomment';
import AllGoods from '../components/content/all_goods';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{ path: '/(home)?', component: RecoContent },
		{ path: '/allgoods', component: AllGoods },
	]
});