import store from '@/store/';
import { gsapScrollTrigger, gsapKill } from '@/utils/gsap.js';
import { observer, disconnectObserver } from '@/utils/observer.js';

// mixin
export default {
	async mounted() {
		await this.$nextTick();
		const elem = document.querySelector('#container');
		gsapScrollTrigger(elem);

		document.querySelector('#app').classList.remove('loading');
		store.commit('setLoading', true);
		setTimeout(() => {
			observer();
		}, 1);
	},
	unmounted() {
		gsapKill();
		disconnectObserver();
	},
};
