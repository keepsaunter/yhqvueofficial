<template>
	<div>
		<ul :class="type==='vertical'?'vertical-ul':'horizontal-ul'" :style="type==='vertical'?{}:{width:headContentWidth}">
			<Liitem @click.native="itemClick(item.id, index)" :class="(type==='vertical'?'vertical-li':'horizontal-li')+' '+(index==checked ? 'active' : '')" v-for="(item, index) in data" :keyid="item.id">{{item.name}}</Liitem>
		</ul>
	</div>
</template>
<script>
	import Liitem from './liitem';
	import { mapGetters } from 'vuex';
	export default {
		props: {
			data: {},
			type: {
				default: 'horizontal',
			},
			checked: {
				default: 0,
			}
		},
		components: {
			Liitem,
		},
		computed: mapGetters(['headContentWidth']),
		methods: {
			itemClick: function(keyId, index){
				this.$emit('checkedChange', keyId, index);
			}
		}
	}
</script>
<style scoped lang='sass'>
	ul{
		margin: auto;
	}
	.vertical-ul{
		text-align: center;
		&:before{
			content: "";
		    border-top: 3px solid #F13656;
		    display: block;
		}
		.vertical-li{
			$active_color: #69F;
			margin: 18px auto;
			&.active,&:hover{
		    	color: $active_color;
				border-bottom: 1px solid $active_color;
			}
		}
	}
	.horizontal-ul{
		$active_color: #F03657;
		padding-bottom: 6px;
		position: relative;
		height: 33px;
		&::before {
			content: "";
		    border-left: 3px solid #F03657;
		    display: block;
		    height: 18px;
		    position: absolute;
		    top: 12px;
		    left: -1%;
		}
		.horizontal-li{
			float: left;
		    margin: 0 6px;
		    padding-bottom: 3px;
		    text-align: center;
		    padding-top: 8px;
		    &.active,&:hover{
		    	color: $active_color;
				border-bottom: 1px solid $active_color;
			}
		}
	}
</style>