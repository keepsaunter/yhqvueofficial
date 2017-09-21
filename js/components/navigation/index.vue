<template>
	<div>
		<ul>
			<Liitem @click.native="checkedChange(index)" :class="'liitem'+' '+(index===navigation_checked?'active':'')" :style="type=='horizontal'?'float:left;margin:0 10px;':''" v-for="(navigation_bar, index) in navigationBarData" :link_data="navigation_bar"></Liitem>
		</ul>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	import Liitem from './liitem';
	export default {
		props: ['navigationBarData', 'type'],
		components: {
			Liitem,
		},
		computed: mapState(['navigation_checked']),
		methods:{
			checkedChange: function(index){
			}
		},
	}
</script>
<style scoped lang='sass'>
	ul{
		list-style: none;
	}
	.liitem{
		height:32px;
		width:120px;
		line-height: 32px;
		cursor: pointer;
		color: #fff;
		text-align: center;
		&.active::after,&:hover::after{
			width: 100%;
		}
		&::after{
			content: "";
		    height: 3px;
		    transition: width .4s;
		    display: block;
		    border-bottom: 2px solid;
		    width: 0;
		    margin: auto;
		}
	}
</style>