<template>
	<div class="sch-input-group" :style="customstyle">
	    <input type="text" value="搜索淘宝隐藏优惠券" placeholder="搜索淘宝隐藏优惠券" class="sch-input">
	    <div class="sch-input-btn">搜索</div>
	</div>
</template>

<script>
	export default{
		props: {
			'customstyle':{
				default: function(){
					return {
						width: '600px',
						height: '40px',
					}
				}	
			}
		},
		data: function(){
			return {};
		},
	}
</script>

<style scoped lang='sass'>
	$red_color: #F03657;

	.sch-input-group{
		position: relative;
    	float: right;
    	width: 36%;

    	.sch-input{
			border: 1px solid $red_color;
		    width: 100%;
		    height: 34px;
		    line-height: 34px;
		    font-size: 13px;
		    border-radius: 40px;
		    padding-left: 16px;
		    outline: 0;
		}

		.sch-input-btn{
			background-color: $red_color;
		    width: 80px;
	    	height: 38px;
		    position: absolute;
		    top: 0;
		    top: -1px\9;
		    right: -17px;
		    text-align: center;
		    line-height: 38px;
		    color: #fff;
		    border-radius: 40px;
		    cursor: pointer;
		}
	}
</style>