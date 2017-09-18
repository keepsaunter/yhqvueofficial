<template>
	<div>
		{{recommendGoods}}
		<GoodsItem></GoodsItem>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import GoodsItem from './goods_item';
	export default {
		computed: mapGetters(['recommendGoods']),
		components: {
			GoodsItem,
		},
		methods:{
			fudianji: function(){
				console.log(this.tp.tt);
				console.log(this.tp.th);
			}
		}
	}
</script>
<style>
	
</style>