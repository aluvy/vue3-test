import store from '@/store/';
import { gsapLoader, gsapLoaderEnd, gsapWorkItem, gsapWorkCount, gsapAnimationTrigger, gsapThemeTrigger, gsapRefresh, gsapVisualTrigger, gsapParallaxTrigger, gsapKill } from '@/utils/gsap.js';

// mixin
export default {
	methods: {
		async PageReady() {
			console.log('ready');
			await this.$nextTick();

			// setTimeout(() => {
			gsapWorkItem();
			gsapWorkCount();
			gsapAnimationTrigger();
			gsapThemeTrigger();
			gsapParallaxTrigger();
			gsapVisualTrigger();

			// store.commit('setLoading', true);
			store.commit('setOpenAside', false);
			document.querySelector('#app').classList.remove('loading');
			// }, 1);

			setTimeout(() => {
				gsapLoader();
				// store.commit('setLoading', false);
			}, 300); // LoadScreen Component transition duration .8s + page loading, change duration .5s

			window.addEventListener('resize', gsapRefresh);
		},
	},
	updated() {
		setTimeout(() => {
			// gsapKill();
			// gsapVisualTrigger();
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
