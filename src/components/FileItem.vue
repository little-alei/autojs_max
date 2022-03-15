<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-14 23:26:03
 * @LastEditTime: 2022-03-15 17:00:12
 * @Description: 单个文件
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div class="item">
		<!-- <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" /> -->
		<van-image fit="fill" round width="3rem" height="3rem" src="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
		<div class="item-info">
			<h5>{{ item.title }}</h5>
			<h6>文件大小:0kb</h6>
			<h6>{{ item.desc }}</h6>
		</div>
		<div>
			<van-icon name="ellipsis" />
		</div>
	</div>
</template>

<script>
export default {
	name: "OneItem",
	data() {
		return {
			item: {
				title: "文件1",
				desc: "文件描述",
			},
		};
	},
	/* props: {
    item: {
      type: Object,
      default: () => ({
        title: "",
        desc: "",
      }),
    },
  }, */
};
</script>

<style>
h5 {
	margin: 5px 0;
}
h6 {
	margin: 0;
}
.item {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 0.5rem;
}
.item-info {
	flex-grow: 1;
	margin-left: 0.5rem;
}
</style>
