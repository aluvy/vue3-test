import store from '@/store/';
import { gsapLoader, gsapLoaderEnd, gsapWorkItem, gsapWorkCount, gsapAnimationTrigger, gsapThemeTrigger, gsapRefresh, gsapVisualTrigger, gsapParallaxTrigger, gsapKill } from '@/utils/gsap.js';

// mixin
export default {
	methods: {
		async PageReady() {
			console.log('ready');
			await this.$nextTick();

			gsapWorkItem();
			gsapWorkCount();
			gsapAnimationTrigger();
			gsapThemeTrigger();
			gsapParallaxTrigger();
			gsapVisualTrigger();

			store.commit('setOpenAside', false);
			document.querySelector('#app').classList.remove('loading');

			setTimeout(() => {
				gsapLoader();
			}, 300);

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
		document.querySelector('#app').classList.add('loading'); // page change
		window.removeEventListener('resize', gsapRefresh);
		gsapLoaderEnd();
		gsapKill();
	},
};
