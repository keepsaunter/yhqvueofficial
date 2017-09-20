<template>
	<div>
		<GoodsItem v-for="(goods, index) in goods_data" :goods_data="goods" :type="type" :ele_index="index"></GoodsItem>
	</div>
</template>
<script>
	import GoodsItem from './goods_item';
	export default {
		props: {
			goods_data:{},
			type: {
				default: 'no_rank',
			}
		},
		components: {
			GoodsItem,
		},
		methods:{

		}
	}
</script>
<style>
	
</style>