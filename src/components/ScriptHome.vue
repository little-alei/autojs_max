<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-14 17:53:02
 * @LastEditTime: 2022-03-15 18:11:38
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
			itemsArr: ["文件1", "文件2", "文件3", "文件4", "文件5", "文件1", "文件2", "文件3", "文件4", "文件5", "文件1", "文件2", "文件3", "文件4", "文件5"],
		};
	},
	components: {
		FileItem,
	},
};
</script>

<style></style>
