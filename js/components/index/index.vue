<template>
	<div>
		<EHeader></EHeader>
		<!-- <RecoContent></RecoContent> -->
		<router-view></router-view>
	</div>
</template>

<script>
	import EHeader from '../header';
	import RecoContent from '../content/recomment';
	export default{
		components:{
			EHeader,
			// RecoContent,
		}
	}
</script>
<style>
	body{
		margin: 0;
	}
	ul{
		margin: 0px;
		padding: 0px;
	}
</style>