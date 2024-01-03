import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui' //引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'; // 引入Vue路由组件
import Home from './views/home.vue'; //主页
import Login from './views/login.vue'; //注册登录页面
import ExcelToWord from './components/exceltoword.vue'; //exceltoword核心页面

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.mixin({
	data() {
		return {
			userId: null,
			api:{
				login:'',
				upload_word:'',
				upload_excel:'',
				upload_task_info:'',
				task_start:'',
				get_task_info:'',
				get_down_info:'',
				get_preview_file:'',
				download_file:''
			}
		};
	},
	//钩子函数
	created() {

	}
});

//路由定义
const router = new VueRouter({
	routes: [{
			path: '/',
			component: Home,
			redirect:'/exceltoword',
			children:[{
				path: '/exceltoword',
				component: ExcelToWord,
			}]
		},
		{
			path: '/login',
			component: Login,
		}
	],
});

// 路由守卫 全局守卫
router.beforeEach((to, from, next) => {
	var userId = Vue.prototype.userId;
	// 尝试从localStorage中获取已存储的用户信息
	const storedUserId = localStorage.getItem('userId');
	console.log(storedUserId)
	if (storedUserId) {
		userId = storedUserId;
	}
	console.log(userId);
	if (userId == null && to.path !== '/login') {
		console.log('强制跳转注册登录页');
		next('/login');
	} else if (userId != null && to.path === '/login') {
		console.log('重定向到主页');
		next('/');
	} else {
		console.log('放行')
		next(); // 放行
	}
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');