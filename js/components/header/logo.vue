<template>
	<img v-bind:src = "imgSrc">
</template>

<script>
	export default {
		data: ()=>{
			return{
				imgSrc: require("../../../static/images/logo.png"),
			}
		}
	}
</script>