import store from '@/store/';
import { gsapAnimationTrigger, gsapThemeTrigger, gsapRefresh, gsapVisualTrigger, gsapParallaxTrigger, gsapKill } from '@/utils/gsap.js';

// mixin
export default {
	methods: {
		async PageReady() {
			console.log('ready');
			await this.$nextTick();

			// setTimeout(() => {
			gsapAnimationTrigger();
			gsapThemeTrigger();
			gsapParallaxTrigger();
			gsapVisualTrigger();

			store.commit('setLoading', true);
			store.commit('setOpenAside', false);
			document.querySelector('#app').classList.remove('loading');
			// }, 1);

			setTimeout(() => {
				store.commit('setLoading', false);
			}, 1300); // LoadScreen Component transition duration .8s + page loading, change duration .5s

			window.addEventListener('resize', gsapRefresh);
		},
	},
	update() {
		gsapRefresh();
	},
	unmounted() {
		document.querySelector('#app').classList.add('loading'); // page change
		window.removeEventListener('resize', gsapRefresh);
		gsapKill();
	},
};
