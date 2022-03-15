<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-14 17:53:02
 * @LastEditTime: 2022-03-14 17:53:03
 * @Description: 
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div>
		<FileItem v-for="(item, index) in itemsArr" :key="index"></FileItem>
	</div>
</template>

<script>
import FileItem from "./FileItem.vue";
export default {
	name: "ScriptHome",
	data() {
		return {
			itemsArr: ["示例1", "示例2", "示例3", "示例4", "示例5", "示例1", "示例2", "示例3", "示例4", "示例5", "示例1", "示例2", "示例3", "示例4", "示例5"],
		};
	},
	components: {
		FileItem,
	},
};
</script>

<style></style>
