import store from '@/store/';
import { gsapAnimationTrigger, gsapThemeTrigger, gsapKill } from '@/utils/gsap.js';

// mixin
export default {
	async mounted() {
		await this.$nextTick();
		gsapAnimationTrigger();
		gsapThemeTrigger();

		document.querySelector('#app').classList.remove('loading');
		setTimeout(() => {
			store.commit('setLoading', false);
		}, 800); // LoadScreen Component transition duration .8s
	},
	beforeUnmount() {
		store.commit('setLoading', true);
		document.querySelector('#app').classList.add('loading');
		store.commit('setOpenAside', false);
	},
	unmounted() {
		gsapKill();
	},
};
