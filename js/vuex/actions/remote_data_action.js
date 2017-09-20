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
	}
}