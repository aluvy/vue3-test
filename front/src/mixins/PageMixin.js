import store from '@/store/';
import { gsapAnimationTrigger, gsapThemeTrigger, gsapKill } from '@/utils/gsap.js';

// mixin
export default {
	async mounted() {
		await this.$nextTick();
		gsapAnimationTrigger();
		gsapThemeTrigger();

		document.querySelector('#app').classList.remove('loading');
		store.commit('setLoading', true);
	},
	unmounted() {
		gsapKill();
	},
};
