/*
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-15 15:44:01
 * @LastEditTime: 2022-03-15 15:51:49
 * @Description: 预设文件
 * 灵感来之不易,积累创造奇迹
 */
module.exports = {
	presets: ["@vue/cli-plugin-babel/preset"],
	plugins: [
		[
			"import",
			{
				libraryName: "vant",
				libraryDirectory: "es",
				style: true,
			},
			"vant",
		],
	],
};
