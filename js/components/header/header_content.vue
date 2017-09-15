<template>
	<div class="header-content" :style="{width: head_width}">
		<Logo class='logo' ></Logo>
		<SearchInput class='search-input'></SearchInput>
	</div>
</template>

<script>
	import SearchInput from '../common/search_input.vue';
	import Logo from '../header/logo.vue';
	import { mapState } from 'vuex';
	const { resolve, join } = require('path');

	export default{
		components:{
			Logo,
			SearchInput
		},
		data: () => {
			return{

			}
		},
		computed: mapState({
			head_width: (state) => {
				return state.styleStore.head_width;
			},
		}),
		methods: {
		}
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
</style>