import store from '@/store/';
import { gsapAnimationTrigger, gsapThemeTrigger, gsapRefresh, gsapVisualTrigger, gsapParallaxTrigger, gsapKill } from '@/utils/gsap.js';

// mixin
export default {
	async mounted() {
		store.commit('setOpenAside', false);
		store.commit('setLoading', true);

		await this.$nextTick();

		gsapAnimationTrigger();
		gsapThemeTrigger();
		gsapParallaxTrigger();
		gsapVisualTrigger();

		document.querySelector('#app').classList.remove('loading');

		setTimeout(() => {
			store.commit('setLoading', false);
		}, 300);

		window.addEventListener('resize', gsapRefresh);
	},
	unmounted() {
		document.querySelector('#app').classList.add('loading'); // page change
		window.removeEventListener('resize', gsapRefresh);
		// gsapLoaderEnd();
		gsapKill();
	},
};
