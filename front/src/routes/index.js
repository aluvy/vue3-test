import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store/';

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
			path: '/work',
			name: 'WorkPage',
			component: () => import('@/views/WorkPage.vue'),
			meta: { title: 'WorkPage' },
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
			path: '/Culture',
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
			path: '/recruit',
			name: 'RecruitPage',
			component: () => import('@/views/RecruitPage.vue'),
			meta: { title: 'RecruitPage' },
		},
	],
});

router.beforeEach((to, from, next) => {
	document.querySelector('#app').classList.add('loading');

	setTimeout(() => {
		document.querySelector('#app').classList.remove('loading');
		store.commit('setOpenAside', false);
		store.commit('setLoading', true);
		next();
	}, 500); // #app loading fade-out time
});

export default router;
