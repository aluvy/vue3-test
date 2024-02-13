// import Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// Vue.use(VueRouter);

const router = createRouter({
	history: createWebHashHistory(),
	// mode: 'history',
	// base: '/#',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{
			path: '/',
			redirect: '/main',
		},
		{
			path: '/main',
			name: 'MainPage',
			component: () => import('@/views/MainPage.vue'),
			meta: { title: 'main' },
		},
		{
			path: '/test',
			name: 'TestPage',
			component: () => import('@/views/TestPage.vue'),
			meta: { title: 'TestPage' },
		},
	],
});

export default router;
