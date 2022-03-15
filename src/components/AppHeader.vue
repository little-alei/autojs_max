<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-14 19:16:27
 * @LastEditTime: 2022-03-15 20:45:26
 * @Description: app头部
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div>
		<van-popup v-model="show" position="left" :style="{ height: '100%', width: '60%' }" teleport="#app">
			<SideBar></SideBar>
		</van-popup>
		<van-nav-bar fixed placeholder title="Auto.js Pro" @click-left="onClickLeft">
			<template #left>
				<van-icon name="apps-o" size="25" />
			</template>
			<template #right>
				<van-icon name="edit" size="25" @click="openWorkspace" />
				<van-icon name="description" size="25" @click="openLogView" />
				<van-icon name="newspaper-o" size="25" @click="openDocument" />
				<van-popover v-model="showPopover" placement="left-start" :actions="actions">
					<template #reference>
						<van-icon name="other-pay" size="25" @click="showMore" />
					</template>
				</van-popover>
			</template>
		</van-nav-bar>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import SideBar from "./SideBar.vue";
import { Toast } from "vant";
export default {
	name: "AppHeader",
	data() {
		return {
			show: false,
			showPopover: false,
			actions: [
				{ text: "搜索", icon: "search" },
				{ text: "终端", icon: "music-o" },
			],
		};
	},
	methods: {
		...mapMutations("PublicAttribute", ["CONTROl_POPUP"]),
		// ...mapActions("PublicAttribute", ["showPopup", "hidePopup"]),
		onClickLeft() {
			this.show = !this.show;
		},
		openWorkspace() {
			Toast("打开工作区");
		},
		openLogView() {
			Toast("打开日志");
		},
		openDocument() {
			Toast("打开文档");
		},
		showMore() {
			Toast("打开更多");
			this.showPopover = !this.showPopover;
		},
	},
	watch: {
		show(newValue) {
			this.CONTROl_POPUP(newValue);
		},
	},
	components: {
		SideBar,
	},
};
</script>

<style></style>
