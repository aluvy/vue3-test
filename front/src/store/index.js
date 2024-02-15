import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			Loading: false,
			OpenAside: false,
		};
	},
	getters: {
		isOpenAside: state => state.OpenAside,
		isLoading: state => state.Loading,
	},
	mutations: {
		setOpenAside(state, payload) {
			state.OpenAside = payload;
		},
		setLoading(state, payload) {
			state.Loading = payload;
		},
	},
	actions: {},
});

export default store;
