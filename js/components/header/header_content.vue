<template>
	<div class="header-content" :style="{width: headContentWidth}">
		<Logo class='logo' ></Logo>
		<SearchInput class='search-input'></SearchInput>
		<NavigationBar class="navigation-bar" :navigationBarData="navigationBarData" type='horizontal'></NavigationBar>
	</div>
</template>

<script>
	import SearchInput from '../common/search_input';
	import Logo from '../header/logo';
	import NavigationBar from '../navigation'
	import { mapGetters } from 'vuex';

	export default{
		components:{
			Logo,
			SearchInput,
			NavigationBar,
		},
		data: () => {
			return{
			}
		},
		computed: mapGetters([
			'navigationBarData',
			'headContentWidth',
		])
	}
</script>

<style scoped>
	.header-div{
		margin: auto;
	}
	.search-input{
		width: 36%;
		float: right;
    	right: 12.4%;
    	top: 18px;
	}
	.navigation-bar{
		margin-left: -18px;
	}
</style>