<template>
	<div class="header-div" @click="test" :style="{width: head_width}">
		<div class="header-bk" :style="{backgroundImage: 'url('+header_bk_img+')'}"></div>
		<Logo class='mylogo' ></Logo>
		<SearchInput></SearchInput>
	</div>
</template>

<script>
	import SearchInput from '../common/search_input.vue';
	import Logo from '../header/logo.vue';
	import { mapState, mapGetters } from 'vuex';
	const { resolve, join } = require('path');

	export default{
		components:{
			Logo,
			SearchInput
		},
		computed: Object.assign({}, mapState({
			head_width: (state) => {
				return state.styleStore.head_width;
			},
			header_bk_img: (state) => {
				//console.log(state.styleStore.getImgPath);
				var a = '../../../static/images/';
				var name = 'images/head-bk.png';
				var path='../../../static/images/head-bk.png';
				const req = require.context('../../../static/images/', true, /\.png/);
				return path;
				// return req(name);
				//console.log(require(`../../../static/${name}`));
				//return require(`${path}`);
				//return require(path);
				// return require(`../../../static/images/${name}`);
			}
		}),mapGetters(['getImgPath'])),
		data: () => {
			return {
				tt:'4444333222',
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
	.header-bk{
	    background-size: 100% 100%;
	    height: 150px;
	    position: absolute;
	    width: 100%;
	    z-index: -1;
	}
	.header-div{
		margin: auto;
	}
</style>