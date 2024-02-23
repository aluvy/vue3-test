import store from '@/store/';

// mixin
export default {
	mounted() {
		// console.log('mixin mounted');
		document.querySelector('#app').classList.remove('loading');
		store.commit('setLoading', true);
	},
};
