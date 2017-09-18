<template>
	<div class="goods-item">
		<a class="goods-img" target="_blank" >
			<img style="width240px;height:240px;" src="https://img.alicdn.com/imgextra/i1/2142000223/TB2bo0odRUSMeJjy1zkXXaWmpXa_!!2142000223.jpg">
		</a>
		<div class="goods-detail">
			<a class="goods-tt">童装女童秋装套装2017新款春秋洋气运动女大童休闲韩版儿童三件套</a>
			<div style="margin:15px 0;position:relative;">
				<span class="goods-price">淘宝价：
					<em>¥118.0</em>
				</span>
				<span class="goods-salecount">已售：187</span>
			</div>
			<div style="position:relative;">
				<span class="goods-coupon-price">优惠券
					<div>30元</div>
				</span>
				<a class="goods-coupon-href" target="_blank">领券购买</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
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
	    .goods-img{
	    	display: block;
		    margin: auto;
		    width: 240px;
		    height: 240px;
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