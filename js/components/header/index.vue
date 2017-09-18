<template>
	<div class="header-div" :style="{backgroundImage: 'url('+imgHeaderBk+')'}">
		<HeaderContent class="header-content"></HeaderContent>
	</div>
</template>

<script>
	import HeaderContent from './header_content';
	import { mapGetters } from 'vuex';
	const { resolve, join } = require('path');

	export default{
		components:{
			HeaderContent
		},
		computed: mapGetters(['imgHeaderBk']),
		data: () => {
			return {
			}
		},
		methods: {
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
		padding-top: 33px;
	}
</style>