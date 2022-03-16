/*
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-15 15:44:01
 * @LastEditTime: 2022-03-16 16:04:27
 * @Description:
 * 灵感来之不易,积累创造奇迹
 */
import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
//安装vuex
import store from "./store"; //index.js可以省略
//vant组件
import { Tab, Tabs, NavBar, Icon, Popup, Cell, Switch, Button, Popover, Sticky } from "vant";
import { Image as VanImage } from "vant";
Vue.use(Tab).use(Tabs).use(NavBar).use(Icon).use(Popup).use(Cell).use(Switch).use(Button).use(Popover).use(Sticky);
Vue.use(VanImage);
//vue-material组件
import { MdButton, MdContent, MdTabs, MdIcon, MdAutocomplete, MdMenu, MdBottomBar } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdIcon);
Vue.use(MdAutocomplete);
Vue.use(MdMenu);
Vue.use(MdBottomBar);
//引入fab
import VueFab from "vue-float-action-button";
Vue.use(VueFab, {
	// 可选iconfont图标或MaterialIcons
	iconType: "MaterialDesign",
});
new Vue({
	store,
	render: (h) => h(App),
}).$mount("#app");
