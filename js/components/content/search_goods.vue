<template>
	<div>
		<GoodsList :goods_data="search_goods" :style="{marginTop: goodsContentMarginTop,width:headContentWidth}" class="goods-list-content"></GoodsList>
	</div>
</template>
<script>
	import GoodsList from '../goods/goods_list';
	import { mapState, mapGetters } from 'vuex';
	export default{
		components:{
			GoodsList,
		},
		computed: Object.assign(mapGetters(['headContentWidth', 'search_goods', 'goodsContentMarginTop']),mapState(['search_input_val'])),
		created: function(){
			this.$store.dispatch('navClick', -1);
		},
	}
</script>
<style scoped>
	.goods-list-content{
		margin: auto;
		margin-top: 20px;
	}
</style>