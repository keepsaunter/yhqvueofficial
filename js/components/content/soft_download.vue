<template>
	<div>
		<GoodsList :goods_data="popularity_goods" :style="{width:headContentWidth}" class="goods-list-content" type="has_rank"></GoodsList>
	</div>
</template>
<script>
	import GoodsList from '../goods/goods_list';
	import { mapGetters } from 'vuex';
	export default{
		components:{
			GoodsList,
		},
		computed: mapGetters(['headContentWidth', 'popularity_goods']),
		created: function(){
			this.$store.dispatch('navClick', 4);
			this.$store.dispatch('getPopularityGoods');
		},
	}
</script>
<style scoped>
	.goods-list-content{
		margin: auto;
		margin-top: 20px;
	}
</style>