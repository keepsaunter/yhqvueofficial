<template>
	<div class="goods-item">
		<a class="goods-img" target="_blank" :href="goods_data.mobileCouponURL">
			<div v-if="type==='has_rank'" class="rank-show-div">TOP{{ele_index+1}}</div>
			<img style="width240px;height:240px;" :src="goods_data.imageUrl">
		</a>
		
		<div class="goods-detail">
			<a class="goods-tt" target="_blank" :href="goods_data.mobileCouponURL">{{goods_data.title}}</a>
			<div style="margin:15px 0;position:relative;">
				<span class="goods-price">淘宝价：
					<em>¥{{goods_data.originalPriceYuan}}</em>
				</span>
				<span class="goods-salecount">已售：{{goods_data.soldCountStr}}</span>
			</div>
			<div style="position:relative;">
				<span class="goods-coupon-price">优惠券
					<div>{{goods_data.coupon}}元</div>
				</span>
				<a class="goods-coupon-href" target="_blank" :href="goods_data.mobileCouponURL">领券购买</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			type: {},
			ele_index: {
				default: 0,
			},
			goods_data: {
				type: Object,
				default: ()=>{
					return {
						mobileCouponURL: '',
						imageUrl: '',
						title: '',
						originalPriceYuan: '',
						soldCountStr: '',
						coupon: '',
					}
				}
			}
		}
	}
</script>
<style scoped lang="sass">
	.goods-item{
		padding-top: 10px;
	    border-radius: 6px;
	    border: 1px solid #BCBCBC;
	    padding: 10px 0;
	    overflow: hidden;
	    display: inline-block;
	    width: 263px;
	    height: 380px;
	    margin: 0 14px;
	    margin-bottom: 20px;
	    a{
	    	text-decoration: none;
	    	color: black;
	    }
	    .goods-img{
	    	display: block;
		    margin: auto;
		    width: 240px;
		    height: 240px;
	    }
	    .rank-show-div{
	        width: 80px;
	        background-color: black;
		    color: white;
		    line-height: 30px;
		    font-size: 20px;
		    position: absolute;
		    text-align: center;
	    }
	    .goods-detail {
		    padding: 2px 0;
		    font-size: 14px;
		    width: 240px;
		    margin: auto;
		}
		.goods-tt {
		    height: 40px;
		    line-height: 20px;
		    font-size: 16px;
		    overflow: hidden;
		    display: block;
		}
		.goods-price{
			vertical-align: -webkit-baseline-middle;
		}
		.goods-salecount {
		    color: #868686;
		    float: right;
		    padding-top: 6px;
		}
		.goods-coupon-price {
		    color: #F03657;
		    font-size: 16px;
		}
		.goods-coupon-price>div {
		    margin-left: 6px;
		    border: 1px dotted #F03657;
		    padding: 3px 0;
		    border-radius: 6px;
		    text-align: center;
		    width: 75px;
		    display: inline-block;
		}
		.goods-coupon-href {
		    margin-left: 13px;
		    padding: 3px 16px;
		    background-color: #F03657;
		    border-radius: 6px;
		    color: #fff;
		    height: 36px;
		    text-align: center;
		    line-height: 36px;
		    font-size: 16px;
		}
	}
</style>