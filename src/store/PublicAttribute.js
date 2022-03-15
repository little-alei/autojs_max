/*
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-09 18:22:46
 * @LastEditTime: 2022-03-15 20:48:13
 * @Description: 人员的操作
 * 灵感来之不易,积累创造奇迹
 */
export default {
	//启动命名空间
	namespaced: true,
	//用于响应文件组件中的动作
	actions: {
		showPopup(context) {
			context.commit("CONTROl_POPUP", true);
		},
		hidePopup(context) {
			context.commit("CONTROl_POPUP", false);
		},
	},
	//用于操作数据
	mutations: {
		CONTROl_POPUP(state, mValue) {
			state.show = mValue;
		},
	},
	//用于存储数据
	state: {
		show: false, //侧拉遮罩
	},
	//用于处理计算,类似于计算属性
	/* getters: {
		bigValue(state) {
			return state.value * 10;
		},
	}, */
};
