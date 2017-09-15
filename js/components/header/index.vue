<template>
	<div class="header-div" @click="test" :style="{backgroundImage: 'url('+header_bk_img_path+')'}">
		<HeaderContent class="header-content"></HeaderContent>
	</div>
</template>

<script>
	import HeaderContent from './header_content';
	import { mapState } from 'vuex';
	const { resolve, join } = require('path');

	export default{
		components:{
			HeaderContent
		},
		computed: mapState({
			header_bk_img_path: function(state){
				return state.resourceStore.img_head_bk;
			}
		}),
		data: () => {
			return {
			}
		},
		methods: {
			test: function(){
				console.log('4444');
				console.log(this.getImgPath);
			}
		}
	}
</script>

<style scoped>
	.header-div{
	    background-size: 100% 100%;
	    height: 150px;
	    width: 100%;
	}
	.header-content{
		margin: auto;
		padding-top: 30px;
	}
</style>