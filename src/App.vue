<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-13 13:47:44
 * @LastEditTime: 2022-03-16 19:18:34
 * @Description: 
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div>
		<AppHeader />
		<van-tabs swipeable animated sticky offset-top="46px" v-model="active" @change="changeFab">
			<van-tab title="首页">
				<ScriptHome></ScriptHome>
			</van-tab>
			<van-tab title="示例">
				<ScriptSample></ScriptSample>
			</van-tab>
			<van-tab title="商店">
				<ScriptShop></ScriptShop>
			</van-tab>
			<van-tab title="任务">
				<ScriptTask></ScriptTask>
			</van-tab>
		</van-tabs>
		<vue-fab ref="mFab" :hidden="hide" :scrollAutoHide="openAction" autoHideDirection="down" mainBtnColor="#3599DB">
			<fab-item @clickItem="addConfig" :idx="0" title="add" icon="add" />
			<fab-item @clickItem="addConfig" :idx="1" title="https" icon="https" />
			<fab-item @clickItem="addConfig" :idx="2" title="edit" icon="edit" />
		</vue-fab>
	</div>
</template>

<script>
import { Toast } from "vant";
import AppHeader from "./components/AppHeader.vue";
import ScriptHome from "./components/ScriptHome.vue";
import ScriptSample from "./components/ScriptSample.vue";
import ScriptShop from "./components/ScriptShop.vue";
import ScriptTask from "./components/ScriptTask.vue";
export default {
	name: "App",
	data() {
		return {
			active: 0,
			openAction: true,
			hide: false,
		};
	},
	methods: {
		addConfig() {
			Toast("点击悬浮窗子选项");
			/* this.$refs.mFab.onOffFab(true);
			setTimeout(() => {
				this.hide = true;
			}, 1000); */
		},
		changeFab() {
			if (this.active == 0) {
				this.$refs.mFab.onOffFab(true);
				this.openAction = true;
				this.hide = false;
			} else {
				this.$refs.mFab.onOffFab(false);
				this.openAction = false;
				setTimeout(() => {
					this.hide = true;
				}, 500);
			}
		},
	},
	watch: {
		"$store.state.PublicAttribute.show"(newValue) {
			if (this.active == 0) this.$refs.mFab.onOffFab(!newValue);
		},
	},
	mounted() {
		this.expand = this.$refs.mFab.active;
	},
	components: {
		AppHeader,
		ScriptHome,
		ScriptSample,
		ScriptShop,
		ScriptTask,
	},
};
</script>
<style></style>
