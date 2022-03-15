<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-14 20:29:13
 * @LastEditTime: 2022-03-15 16:12:40
 * @Description: 侧滑栏内容
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div>
		<van-cell center title="无障碍服务">
			<template #right-icon>
				<van-switch v-model="accessibility" size="24" />
			</template>
		</van-cell>
		<van-cell center title="悬浮窗权限">
			<template #right-icon>
				<van-switch v-model="floaty" size="24" />
			</template>
		</van-cell>
	</div>
</template>

<script>
export default {
	name: "SideBar",
	data() {
		return {
			accessibility: false,
			floaty: false,
		};
	},
};
</script>

<style></style>
