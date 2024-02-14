import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			OpenAside: false,
			count: 1000,
		};
	},
	getters: {
		isOpenAside: state => state.OpenAside,
		getCount: state => state.count,
	},
	mutations: {
		setOpenAside(state, payload) {
			state.OpenAside = payload;
		},
	},
	actions: {},
});

export default store;
