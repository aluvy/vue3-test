import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			Loading: true,
			OpenAside: false,
			Scrolled: false,
			NoScroll: false,
		};
	},
	getters: {
		isLoading: state => state.Loading,
		isOpenAside: state => state.OpenAside,
		isScrolled: state => state.Scrolled,
		isNoScroll: state => state.NoScroll,
	},
	mutations: {
		setLoading(state, payload) {
			state.Loading = payload;
		},
		setOpenAside(state, payload) {
			state.OpenAside = payload;
			state.NoScroll = payload;
		},
		setScrolled(state, payload) {
			state.Scrolled = payload;
		},
		setNoScroll(state, payload) {
			state.NoScroll = payload;
		},
	},
	actions: {},
});

export default store;
