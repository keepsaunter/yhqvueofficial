<template>
	<div>
		<GoodsList :goods_data="popularity_goods" :style="{marginTop: goodsContentMarginTop,width:headContentWidth}" class="goods-list-content" type="has_rank"></GoodsList>
	</div>
</template>
<script>
	import GoodsList from '../goods/goods_list';
	import { mapGetters } from 'vuex';
	export default{
		components:{
			GoodsList,
		},
		computed: mapGetters(['headContentWidth', 'popularity_goods', 'goodsContentMarginTop']),
		created: function(){
			this.$store.dispatch('navClick', 2);
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