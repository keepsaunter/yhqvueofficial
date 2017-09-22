<template>
	<div>
		<GoodsList :goods_data="recomment_goods" :style="{marginTop: goodsContentMarginTop,width:headContentWidth}" class="goods-list-content"></GoodsList>
	</div>
</template>
<script>
	import GoodsList from '../goods/goods_list';
	import { mapGetters } from 'vuex';
	export default{
		components:{
			GoodsList,
		},
		computed: mapGetters(['headContentWidth', 'recomment_goods', 'goodsContentMarginTop']),
		created: function(){
			this.$store.dispatch('navClick', 0);
			this.$store.dispatch('getRecommentGoods');
		},
	}
</script>
<style scoped>
	.goods-list-content{
		margin: auto;
		margin-top: 20px;
	}
</style>