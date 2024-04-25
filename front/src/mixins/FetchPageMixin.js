import store from '@/store/';
import { gsapFullVisualAnimation, gsapNormalVisualAnimation, gsapWorkItem, gsapWorkCount, gsapAnimationTrigger, gsapThemeTrigger, gsapRefresh, gsapParallaxTrigger, gsapKill } from '@/utils/gsap.js';

// mixin
export default {
	methods: {
		async PageReady() {
			console.log('ready');
			// store.commit('setOpenAside', false);
			store.commit('setLoading', true);
			await this.$nextTick();

			gsapWorkItem();
			gsapWorkCount();
			gsapAnimationTrigger();
			gsapThemeTrigger();
			gsapParallaxTrigger();

			setTimeout(() => {
				document.querySelector('#app').classList.remove('loading');
				store.commit('setLoading', false);
			}, 1);

			// setTimeout(() => {
			gsapFullVisualAnimation();
			gsapNormalVisualAnimation();
			// }, 150);

			window.addEventListener('resize', gsapRefresh);
		},
	},
	updated() {
		setTimeout(() => {
			gsapAnimationTrigger();
			gsapRefresh();
		}, 1);
	},
	unmounted() {
		store.commit('setOpenAside', false);
		document.querySelector('#app').classList.add('loading'); // page change
		window.removeEventListener('resize', gsapRefresh);
		gsapKill();
	},
};
