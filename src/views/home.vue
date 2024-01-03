<template>
	<div>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">
				<router-link to="/exceltoword" class="item">ExcelToWord</router-link>
			</el-menu-item>
			<el-menu-item index="2" disabled>充值中心</el-menu-item>
			<el-menu-item index="3">退出登录</el-menu-item>
		</el-menu>
		<div class="line"></div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key);
				console.log(keyPath)
				switch (key) {
					case '3':
						console.log('退出登陆')
						this.$root.userId = null;
						localStorage.removeItem('userId');
						// 执行路由跳转
						console.log('执行路由跳转')
						// 清除当前页面的路由状态
						this.$router.replace('/login')
						break;
				}
			}
		}
	}
</script>

<style>
	.item {
		text-decoration: none;
	}
</style>