import store from '@/store/';
import { gsapAnimationTrigger, gsapThemeTrigger, gsapRefresh, gsapKill } from '@/utils/gsap.js';

// mixin
export default {
	methods: {
		async onPageReady() {
			console.log('ready');
			await this.$nextTick();
			gsapAnimationTrigger();
			gsapThemeTrigger();

			store.commit('setLoading', true);
			store.commit('setOpenAside', false);
			document.querySelector('#app').classList.remove('loading');

			setTimeout(() => {
				store.commit('setLoading', false);
			}, 1300); // LoadScreen Component transition duration .8s + page loading, change duration .5s

			window.addEventListener('resize', gsapRefresh);
		},
	},
	unmounted() {
		gsapKill();
		window.removeEventListener('resize', gsapRefresh);
	},
};
