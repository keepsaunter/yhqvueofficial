<template>
	<div>
		<ul>
			<Liitem @click.native="test" :class="'liitem'+' '+(index===0?'active':'')" :style="type=='horizontal'?'float:left;margin:0 10px;':''" v-for="(navigation_bar, index) in navigationBarData">{{navigation_bar}}</Liitem>
		</ul>
	</div>
</template>
<script>
	import Liitem from './liitem';
	export default {
		props: ['navigationBarData', 'type'],
		data: () => {
			return {
				catalogs:[ 1, 2, 3]
			}
		},
		components: {
			Liitem,
		},
		methods:{
			test: function(){
				console.log('333');
				console.log(this);
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
		&.active::after{
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