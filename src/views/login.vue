<template>
	<div>
		<el-card class="box-card">
			<h2>登录</h2>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="left"
				label-width="70px" class="login-from">
				<el-form-item label="用户名" prop="uname">
					<el-input v-model="ruleForm.uname"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div class="btnGroup">
				<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
				<el-button @click="register('ruleForm')">注册</el-button>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					uname: "",
					password: "",
				},
				rules: {
					uname: [{
						required: true,
						message: "用户名不能为空！",
						trigger: "blur"
					}, ],
					password: [{
						required: true,
						message: "密码不能为空！",
						trigger: "blur"
					}, ],
				},
			};
		},
		methods: {
			submitForm(formName) {
				//登录逻辑
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$root.userId = 1;
						localStorage.setItem('userId', 1);
						// 执行路由跳转
						console.log('执行路由跳转')
						this.$router.push('/')
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			register(formName) {
				//注册逻辑
				console.log('注册')
			},
			resetForm(formName) {
				//重置表单
				this.$refs[formName].resetFields();
			},
		},
	};
</script>

<style scoped>
	.box-card {
		margin: auto auto;
		width: 400px;
	}

	.login-from {
		margin: auto auto;
	}
</style>