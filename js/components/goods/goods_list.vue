<template>
	<div>
		<GoodsItem :loaded_arr="goods_showing" v-for="(goods, index) in goods_data" :goods_data="goods" :type="type" :ele_index="index"></GoodsItem>
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
				goods_showing: [0,0],
			}
		},
		computed: mapGetters(['imgScrollTop', 'scroll_animation_device']),
		components: {
			GoodsItem,
		},
		mounted:function(){
			let self = this;
			window.addEventListener('scroll', function(){
				self.scrollTopBtnShow();
				// self.loadImage()();
			});
		},
		methods:{
			scrollTopBtnShow: function(){
				let scroll_top_btn_show = this.scroll_top_btn_show;
				if(scroll_top_btn_show != 'scrolling'){
					if((document.body.scrollTop || document.documentElement.scrollTop) > 1.5 * (window.screen.height || window.screen.availHeight)){
						if(!scroll_top_btn_show)
							this.scroll_top_btn_show = true;
					}else{
						if(scroll_top_btn_show)
							this.scroll_top_btn_show = false;
					}
				}
			},
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
			},
			// loadImage: function(){
			// 	var self = this;
			// 	return self.debounce(function(){
			// 		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			//         var innerHeight = window.screen.height || window.screen.availHeight;
			//         var index = Math.ceil((scrollTop + innerHeight - 150) / 420) * 4;
			//         var start_show = Math.floor((scrollTop - 150) / 420) * 4;
			//         start_show = start_show > 0 ? start_show : 0;
			//         if(self.goods_data.length !=0 && index > self.goods_data.length){
			//         	index = self.goods_data.length
			//         }

			//         console.log(start_show+";"+index)
			//         for(let i=start_show; i<index;i++){
			//         	console.log(self.$refs['gitem'+i][0]);
			//         	self.$refs['gitem'+i][0].loadImg();
			//         }
			// 	}, 5000);
			// },
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