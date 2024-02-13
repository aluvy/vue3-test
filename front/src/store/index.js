import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			count: 1000,
		};
	},
	getters: {
		getCount: state => state.count,
	},
	mutations: {},
	actions: {},
});

export default store;
