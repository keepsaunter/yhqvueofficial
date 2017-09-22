<template>
	<div class="sch-input-group" style="width:600px">
		<img :src="imgSearchIco" class="search-ico">
	    <input ref="sch_input" @keyup.enter="searchBtnClick" type="text" v-model="search_input_val" placeholder="搜索淘宝隐藏优惠券" class="sch-input">
	    <div @click="searchBtnClick" class="sch-input-btn">搜索</div>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';
	export default{
		computed: {
			...mapGetters(['imgSearchIco']),
			search_input_val: {
				get: function(){
					return this.$store.state.search_input_val;
				},
				set: function(newval){
					this.$store.state.search_input_val = newval;
				}
			}
		},
		methods: {
			searchBtnClick: function(){
				this.$router.push('/search');
				this.$store.dispatch('getSearchGoods');
			}
		}
	}
</script>

<style scoped lang='sass'>
	@import "../../../sass/common.scss";
	$red_color: #F03657;
	$black_color: #fff;
	$lineHeight: 36px;

	.sch-input-group{
		position: relative;
    	.search-ico{
    		width: 17px;
		    position: absolute;
		    top: 10px;
		    left: 10px;
    	}
    	.sch-input{
    		border: 0;
		    width: 100%;
		    height: $lineHeight - 2px;
		    line-height: $lineHeight - 2px;
		    font-size: 13px;
		    border-radius: 5px 0 0 5px;
		    padding-left: 34px;
		    outline: 0;
		    color: #757575;
    	}
    	.sch-input-btn{
    		background-color: $yellow_color;
		    width: 80px;
		    height: $lineHeight;
		    position: absolute;
		    top: 0;
		    right: -114px;
		    text-align: center;
		    line-height: $lineHeight;
		    color: $black_color;
		    border-radius: 0 5px 5px 0;
		    cursor: pointer;
    	}
	}
</style>