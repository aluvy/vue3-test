import { createRouter, createWebHashHistory } from 'vue-router';
// import store from '@/store/';

const router = createRouter({
	history: createWebHashHistory(),
	// mode: 'history',
	// base: '/#',
	scrollBehavior(to, from, savedPosition) {
		// console.log(to, from, savedPosition);

		if (to.path === '/insight' && from.path.includes('/insight/')) {
			return savedPosition;
		}

		if (to.path !== from.path) {
			return { top: 0 };
		}

		return savedPosition;
	},
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
			path: '/work',
			name: 'WorkPage',
			component: () => import('@/views/WorkPage.vue'),
			meta: { title: 'WorkPage' },
		},
		{
			path: '/work/:workId',
			name: 'WorkView',
			component: () => import('@/views/WorkView.vue'),
			meta: { title: 'WorkView' },
		},
		{
			path: '/about',
			name: 'AboutPage',
			component: () => import('@/views/AboutPage.vue'),
			meta: { title: 'AboutPage' },
		},
		{
			path: '/who-we-are',
			name: 'WhoWeArePage',
			component: () => import('@/views/WhoWeArePage.vue'),
			meta: { title: 'WhoWeArePage' },
		},
		{
			path: '/contact-us',
			name: 'ContactUsPage',
			component: () => import('@/views/ContactUsPage.vue'),
			meta: { title: 'ContactUsPage' },
		},
		{
			path: '/culture',
			name: 'CulturePage',
			component: () => import('@/views/CulturePage.vue'),
			meta: { title: 'CulturePage' },
		},
		{
			path: '/insight',
			name: 'InsightPage',
			component: () => import('@/views/InsightPage.vue'),
			meta: { title: 'InsightPage' },
		},
		{
			path: '/insight/:insightId',
			name: 'InsightView',
			component: () => import('@/views/InsightView.vue'),
			meta: { title: 'InsightView' },
		},
		{
			path: '/recruit',
			name: 'RecruitPage',
			component: () => import('@/views/RecruitPage.vue'),
			meta: { title: 'RecruitPage' },
		},
	],
});

// router.beforeEach((to, from, next) => {
// 	// document.querySelector('#app').classList.add('loading'); // page change
// 	console.log('beforeEach', to);
// 	next();
// });

export default router;
