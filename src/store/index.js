/*
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-08 23:53:22
 * @LastEditTime: 2022-03-09 22:31:37
 * @Description: 创建vuex
 * 灵感来之不易,积累创造奇迹
 */
//引入vue和vuex
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import PublicAttribute from "./PublicAttribute";
//创建并暴露store
export default new Vuex.Store({
	modules: {
		PublicAttribute,
	},
});
