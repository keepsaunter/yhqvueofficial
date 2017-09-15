<template>
	<img v-bind:src = "logo_img_path">
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data: ()=>{
			return{
				logo_img_name: "logo.png",
			}
		},
		computed: mapState({
			logo_img_path: function(state){
				return state.resourceStore.img_logo;
			}
		}),
	}
</script>
<style scoped>
	img{
		margin-left: 10px;
    	width: 171px;
    	vertical-align: middle;
	}
</style>