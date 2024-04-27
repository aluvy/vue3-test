import store from '@/store/';
import {
	// smoothScrollbar,
	// header theme
	gsapHeaderThemeTrigger,

	// visual
	gsapFullVisualAnimation,
	gsapNormalVisualAnimation,
	gsapAboutVisualAnimation,

	// work
	gsapWorkItem,
	gsapWorkCount,

	//
	gsapAnimationTrigger,
	gsapParallaxTrigger,

	// reset, kill
	gsapRefresh,
	gsapKill,
} from '@/utils/gsap.js';

// mixin
export default {
	methods: {
		async PageReady() {
			console.log('ready');
			// store.commit('setOpenAside', false);
			// store.commit('setLoading', true);
			// smoothScrollbar();
			await this.$nextTick();

			// document.querySelector('#app').classList.remove('loading');
			document.documentElement.classList.remove('loading'); // page change
			store.commit('setLoading', false);

			this.gsapInit();

			window.addEventListener('resize', gsapRefresh);
		},
		gsapInit() {
			// header theme
			gsapHeaderThemeTrigger();
			// visual
			gsapFullVisualAnimation();
			gsapNormalVisualAnimation();
			gsapAboutVisualAnimation();
			// work
			gsapWorkItem();
			gsapWorkCount();
			//
			gsapAnimationTrigger();
			gsapParallaxTrigger();
		},
	},
	updated() {
		setTimeout(() => {
			gsapAnimationTrigger();
			gsapRefresh();
		}, 1);
	},
	unmounted() {
		// document.querySelector('#app').classList.add('loading'); // page change
		// store.commit('setOpenAside', false);
		document.documentElement.classList.add('loading'); // page change
		window.removeEventListener('resize', gsapRefresh);
		gsapKill();
	},
};
