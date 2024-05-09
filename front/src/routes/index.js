// import { Vue } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { scrollbar } from '@/utils/gsap.js';
import store from '@/store/';
import insightView from '@/routes/insightView.js';

let workListOffsetY = 0;
let insightListOffsetY = 0;

const router = createRouter({
	history: createWebHashHistory(),
	// mode: 'history',
	// base: '/#',
	scrollBehavior(to, from, savedPosition) {
		console.log('scrollBehavior');
		// console.log(to, from); // "WorkPage", "WorkView"

		// console.log(to.name, from.name);

		if (to.name === 'WorkPage' && from.name === 'WorkView') {
			setTimeout(() => {
				scrollbar.scrollTo(0, workListOffsetY, 0);
			}, 1000);
			return savedPosition;
		}

		if (to.name === 'InsightPage' && from.name === 'InsightView') {
			setTimeout(() => {
				scrollbar.scrollTo(0, insightListOffsetY, 0);
			}, 1000);
			return savedPosition;
		}
		// insightListOffsetY

		// 	if (to.path === '/insight' && from.path.includes('/insight')) {
		// 		console.log('dddd');
		// 		return savedPosition;
		// 	}

		// 	if (to.path !== from.path) {
		// 		console.log('!==');
		// 		document.querySelector('#app').classList.add('loading');
		// 		return { top: 0 };
		// 	}
		scrollbar.scrollTo(0, 0, 0);
		return { top: 0 };
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
			meta: { title: 'The 51' },
		},
		{
			path: '/work',
			name: 'WorkPage',
			component: () => import('@/views/WorkPage.vue'),
			meta: { title: 'Work' },
		},
		{
			path: '/work/:workId',
			name: 'WorkView',
			component: () => import('@/views/WorkView.vue'),
			meta: { title: 'Work' },
		},
		{
			path: '/about',
			name: 'AboutPage',
			component: () => import('@/views/AboutPage.vue'),
			meta: { title: 'About us' },
		},
		{
			path: '/who-we-are',
			name: 'WhoWeArePage',
			component: () => import('@/views/WhoWeArePage.vue'),
			meta: { title: 'Who we are' },
		},
		{
			path: '/contact-us',
			name: 'ContactUsPage',
			component: () => import('@/views/ContactUsPage.vue'),
			meta: { title: 'Contact Us' },
		},
		{
			path: '/culture',
			name: 'CulturePage',
			component: () => import('@/views/CulturePage.vue'),
			meta: { title: 'Culture' },
		},
		{
			path: '/insight',
			name: 'InsightPage',
			component: () => import('@/views/InsightPage.vue'),
			meta: { title: 'INSIGHT' },
		},
		// {
		// 	path: '/work/:workId',
		// 	name: 'WorkView',
		// 	component: () => import('@/views/WorkView.vue'),
		// 	meta: { title: 'Work' },
		// },
		{
			path: '/insightView/',
			name: 'InsightView',
			component: () => import('@/views/InsightView.vue'),
			meta: { title: 'INSIGHT' },
			children: insightView,
			// beforeEnter: (to, from, next) => {
			// 	console.log('test', to, from);
			// 	// await window.scrollTo(0, 0);
			// 	next();
			// },
		},
		{
			path: '/recruit',
			name: 'RecruitPage',
			component: () => import('@/views/RecruitPage.vue'),
			meta: { title: 'Recruit' },
		},
		{
			path: '/notFound',
			name: 'NotFound',
			component: () => import('@/views/NotFound.vue'),
			meta: { title: 'NotFound' },
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/notFound',
		},
	],
});

router.beforeEach((to, from, next) => {
	document.documentElement.classList.add('loading'); // page change

	if (from.name === 'WorkPage') {
		workListOffsetY = scrollbar.offset.y;
		console.log('workListOffsetY', workListOffsetY);
	}
	if (from.name === 'InsightPage') {
		insightListOffsetY = scrollbar.offset.y;
		console.log('insightListOffsetY', insightListOffsetY);
	}

	// console.log(to, from);
	console.log('beforeEach');
	// store.commit('setScrollOffset', scrollbar.offset); // scrollOffset

	const title = to.meta.title === undefined ? 'The 51' : `${to.meta.title} | The 51 - digital marketing agency`;

	setTimeout(() => {
		// page init
		document.title = title;
		store.commit('setLoading', true);
		store.commit('setOpenAside', false);

		next();
	}, 450); // #app.loading transition time
});

export default router;
