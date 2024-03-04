import store from '@/store/';
import { gsapAnimationTrigger, gsapThemeTrigger, gsapKill } from '@/utils/gsap.js';

// mixin
export default {
	async mounted() {
		await this.$nextTick();
		gsapAnimationTrigger();
		gsapThemeTrigger();

		store.commit('setLoading', true);
		store.commit('setOpenAside', false);
		document.querySelector('#app').classList.remove('loading');

		setTimeout(() => {
			store.commit('setLoading', false);
		}, 1300); // LoadScreen Component transition duration .8s + page loading, change duration .5s
	},
	unmounted() {
		gsapKill();
	},
};
