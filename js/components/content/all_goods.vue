<template>
	<div>
		<GoodsList></GoodsList>
		222
	</div>
</template>
<script>
	import GoodsList from '../goods/goods_list';
	export default{
		components:{
			GoodsList,
		},
		created: function(){
			this.$store.dispatch('navClick', 1);
		},
	}
</script>