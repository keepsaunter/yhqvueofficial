<template>
	<div>
		<FirstCatalog class='first-catalog' :data="catalogs" @checkedChange="firCheckedChange" :checked="first_catalog_checked"></FirstCatalog>
		<GoodsList :goods_data="all_goods" :style="{width:headContentWidth}" class="goods-list-content"></GoodsList>
		<SecondCatalog class='second-catalog' type='vertical' :data="catalogs[first_catalog_checked]?catalogs[first_catalog_checked].childCates:[]" @checkedChange="secCheckedChange" :checked="second_catalog_checked"></SecondCatalog>
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
		computed: Object.assign({}, mapGetters(['headContentWidth', 'catalogs', 'all_goods']),mapState(['first_catalog_checked', 'second_catalog_checked'])),
		created: function(){
			this.$store.dispatch('navClick', 1);
			this.$store.dispatch('getCatalogs');
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
		margin-top: 20px;
	}
	.first-catalog{
		background-color:#F8F8F7;
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