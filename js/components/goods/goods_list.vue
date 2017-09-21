<template>
	<div>
		<GoodsItem v-for="(goods, index) in goods_data" :goods_data="goods" :type="type" :ele_index="index"></GoodsItem>
		<div v-show="scroll_top_btn_show===true" @click="scrollTopBtnClick" class="scroll-top-btn" :style="{backgroundImage:'url('+imgScrollTop+')'}"></div>
	</div>
</template>
<script>
	import GoodsItem from './goods_item';
	import { mapGetters } from 'vuex';
	export default {
		props: {
			goods_data:{},
			type: {
				default: 'no_rank',
			}
		},
		data:() => {
			return {
				scroll_top_btn_show: false,
			}
		},
		computed: mapGetters(['imgScrollTop', 'scroll_animation_device']),
		components: {
			GoodsItem,
		},
		mounted:function(){
			let self = this;
			window.onscroll = function(){
				let scroll_top_btn_show = self.scroll_top_btn_show;
				if(scroll_top_btn_show != 'scrolling'){
					if((document.body.scrollTop || document.documentElement.scrollTop) > 1.5 * (window.screen.height || window.screen.availHeight)){
						if(!scroll_top_btn_show)
							self.scroll_top_btn_show = true;
					}else{
						if(scroll_top_btn_show)
							self.scroll_top_btn_show = false;
					}
				}
			}
		},
		methods:{
			scrollTopBtnClick:function(){
				let self = this;
				self.scroll_top_btn_show = "scrolling";
				var scroll_animation_device = self.scroll_animation_device;
				var top = document.body.scrollTop || document.documentElement.scrollTop;
				var timer_scrollTop = setInterval(function(){
					var dis = top > scroll_animation_device ? top / scroll_animation_device : top;
					(document.body.scrollTop -= dis) || (document.documentElement.scrollTop -= dis);
					top -= dis;
					if(top === 0){
						self.scroll_top_btn_show = false;
						clearInterval(timer_scrollTop);
					}
				}, 10)
			}
		}
	}
</script>
<style>
	.scroll-top-btn{
		width: 55px;
	    height: 55px;
	    position: fixed;
	    top: 600px;
	    right: 160px;
	    cursor: pointer;
	    background-size: 100% 100%;
	}
</style>