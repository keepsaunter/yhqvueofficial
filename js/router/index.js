import Vue from 'vue';
import VueRouter from 'vue-router';
import RecoContent from '../components/content/recomment';
import AllGoods from '../components/content/all_goods';
import PopularityGoods from '../components/content/popularity_goods';
import SalesGoods from '../components/content/sales_goods';
import SoftDownload from '../components/content/soft_download';
import SearchGoods from '../components/content/search_goods';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{ path: '/(home|recomment)?', component: RecoContent },
		{ path: '/allgoods', component: AllGoods },
		{ path: '/popularity', component: PopularityGoods },
		{ path: '/sales', component: SalesGoods },
		{ path: '/download', component: SoftDownload },
		{ path: '/search', component: SearchGoods },
	]
});