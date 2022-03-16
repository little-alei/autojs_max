<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-14 17:53:02
 * @LastEditTime: 2022-03-16 19:18:51
 * @Description: 
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div>
		<div class="shop">
			<ShopItem v-for="(item, index) in itemsArr" :key="index"></ShopItem>
		</div>
		<div class="phone-viewport">
			<md-bottom-bar md-type="shift" md-active-item="bottom-bar-item-pages">
				<md-bottom-bar-item id="bottom-bar-item-home" md-label="Home" md-icon="home"></md-bottom-bar-item>
				<md-bottom-bar-item id="bottom-bar-item-pages" md-label="Pages" md-icon="pages"></md-bottom-bar-item>
				<md-bottom-bar-item id="bottom-bar-item-favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
			</md-bottom-bar>
		</div>
	</div>
</template>

<script>
import ShopItem from "./ShopItem.vue";
export default {
	name: "ScriptShop",
	data() {
		return {
			container: null,
			hide: false,
			itemsArr: ["文件1", "文件2", "文件3"],
		};
	},
	mounted() {
		this.container = this.$refs.container;
		console.log(this.container);
	},
	components: {
		ShopItem,
	},
};
</script>

<style scoped>
.shop {
	margin-bottom: 60px;
	height: 100%;
	width: 100%;
}
.phone-viewport {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 60px; /*脚部的高度*/
	clear: both;
	display: inline-flex;
	align-items: flex-end;
	overflow: hidden;
	border: 1px solid rgba(#000, 0.26);
	background: rgba(#000, 0.06);
}
</style>
