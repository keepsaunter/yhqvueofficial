<template>
	<li :keyid="keyid">
		<slot></slot>
	</li>
</template>
<script>
	export default {
		props: ['keyid'],
	}
</script>
<style scoped>
	li{
		list-style-type: none;
	    height: 22px;
	    cursor: pointer;
	    width: 60px;
	    font-size: 14px;
	    color: #868686;
	}
</style>