<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-14 17:53:02
 * @LastEditTime: 2022-03-15 20:52:38
 * @Description: 
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div style="height: 100%">
		<div id="container">
			<div id="header">Header Section</div>
			<div id="page" class="clearfix">
				<div id="left">Left sidebar</div>
				<div id="content">Main Content</div>
				<div id="right">Right Content</div>
			</div>
			<div class="push"><!-- not put anything here --></div>
		</div>
		<div id="footer">Footer Section</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}
#container {
	min-height: 100%;
	height: auto !important;
	height: 100%;
	margin: 0 auto -60px; /*margin-bottom的负值等于footer高度*/
}
.push,
#footer {
	height: 60px;
	clear: both;
}
/*==========其他div效果==========*/
#header {
	padding: 10px;
	background: lime;
}
#left {
	width: 18%;
	float: left;
	margin-right: 2%;
	background: orange;
}
#content {
	width: 60%;
	float: left;
	margin-right: 2%;
	background: green;
}
#right {
	width: 18%;
	float: left;
	background: yellow;
}
#footer {
	background: #f6c;
}
</style>
