import axios from 'axios';
export default {
	getRecommentGoods: context => {
		axios.get(context.state.remote_server_root+context.state.remote_recomment_path,{
			params:{
				page: 1,
				pageSize: context.getters.pageSize,
				type: 1
			}
		}).then(function(res){
			context.commit('updateRecommentGoods', res.data.listObjs);
		});
	},
	getPopularityGoods: context => {
		axios.get(context.state.remote_server_root+context.state.remote_popularity_path,{
			params:{
				page: 1,
				pageSize: context.getters.pageSize,
				type: 1
			}
		}).then(function(res){
			context.commit('updatePopularityGoods', res.data.listObjs);
		});
	},
	getSalesGoods: context => {
		axios.get(context.state.remote_server_root+context.state.remote_sales_path,{
			params:{
				page: 1,
				pageSize: context.getters.pageSize,
				type: 1
			}
		}).then(function(res){
			context.commit('updateSalseGoods', res.data.listObjs);
		});
	},
	getAllGoods: (context, cataId) => {
		axios.get(context.state.remote_server_root+context.state.remote_all_goods_path,{
			params:{
				cateId: cataId,
				pageno: 1,
				pagesize: context.getters.pageSize,
				itemType: 1
			}
		}).then(function(res){
			context.commit('updateAllGoods', res.data.r.listObjs);
		});
	},
	getCatalogs: context => {
		axios.get(context.state.remote_server_root+context.state.remote_catelogs_path,{
			params:{
				page: 1,
				pageSize: context.getters.pageSize,
				type: 1
			}
		}).then(function(res){
			context.commit('updateCatalogs', res.data.r);
			context.dispatch('getAllGoods', res.data.r[0].id);
		});
	}
}