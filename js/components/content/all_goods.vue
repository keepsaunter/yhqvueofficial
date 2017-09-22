<template>
	<div>
		<FirstCatalog :style="firset_cata_isFixed ? {position:'fixed',top: '0px'}:{}" class='first-catalog' :data="catalogs" @checkedChange="firCheckedChange" :checked="first_catalog_checked"></FirstCatalog>
		<GoodsList :goods_data="all_goods" :style="{marginTop: (firset_cata_isFixed ? (parseInt(goodsContentMarginTop)+40+'px'): goodsContentMarginTop),width:headContentWidth}" class="goods-list-content"></GoodsList>
		<SecondCatalog v-show="catalogs[first_catalog_checked]&&catalogs[first_catalog_checked].childCates.length>0" class='second-catalog' type='vertical' :data="catalogs[first_catalog_checked]?catalogs[first_catalog_checked].childCates:[]" @checkedChange="secCheckedChange" :checked="second_catalog_checked"></SecondCatalog>
	</div>
</template>
<script>
	import GoodsList from '../goods/goods_list';
	import Catalog from '../catalog';
	import { mapGetters, mapState } from 'vuex';
	export default{
		components:{
			GoodsList,
			FirstCatalog: Catalog,
			SecondCatalog: Catalog,
		},
		data: () => {
			return {
				firset_cata_isFixed: false,
			}
		},
		computed: Object.assign({}, mapGetters(['headContentWidth', 'catalogs', 'all_goods', 'goodsContentMarginTop']),mapState(['first_catalog_checked', 'second_catalog_checked'])),
		created: function(){
			this.$store.dispatch('navClick', 1);
			this.$store.dispatch('getCatalogs');
		},
		mounted: function(){
			let self = this;
			window.addEventListener('scroll', function(){
				let top_dis = document.body.scrollTop || document.documentElement.scrollTop;
				if(top_dis >= 150){
					self.firset_cata_isFixed = true;
				}else{
					self.firset_cata_isFixed = false;
				}
			});
		},
		methods: {
			firCheckedChange: function(keyId, index){
				if(index !== this.first_catalog_checked){
					this.$store.dispatch('firstCatalogClick', index);
					this.$store.dispatch('getAllGoods', this.catalogs[this.first_catalog_checked].id);
				}
			},
			secCheckedChange: function(keyId, index){
				if(index !== this.second_catalog_checked){
					this.$store.dispatch('secondCatalogClick', index);
					this.$store.dispatch('getAllGoods', this.catalogs[this.first_catalog_checked].childCates[this.second_catalog_checked].id);
				}
			}
		}
	}
</script>
<style scoped>
	.goods-list-content{
		margin: auto;
	}
	.first-catalog{
		background-color:#F8F8F7;
		width: 100%;
		z-index: 88;
	}
	.second-catalog{
		width: 86px;
	    position: fixed;
	    top: 360px;
	    left: 40px;
	    padding: 2px 2px;
	    border: 2px solid #EFF0EF;
	    background-color: #fff;
	    z-index: 888;
	}
</style>