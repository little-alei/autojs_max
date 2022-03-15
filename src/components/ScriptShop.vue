<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-14 17:53:02
 * @LastEditTime: 2022-03-15 18:59:29
 * @Description: 
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div>
    <ShopItem v-for="(item, index) in itemsArr" :key="index"></ShopItem>
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
      itemsArr: ["文件1", "文件2", "文件3", "文件4", "文件5", "文件1"],
    }
  },
  components: {
    ShopItem,
  },
};
</script>

<style scoped>
.shop{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.phone-viewport {
	width: 100%;
	height: 60px;
	display: inline-flex;
	align-items: flex-end;
	overflow: hidden;
	border: 1px solid rgba(#000, 0.26);
	background: rgba(#000, 0.06);
}
</style>
