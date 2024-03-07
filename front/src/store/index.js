import { createStore } from 'vuex';
import { fetchLists } from '@/api/insight.js';

const store = createStore({
	state() {
		return {
			Loading: true,
			OpenAside: false,
			Scrolled: false,
			NoScroll: false,
			header: true,
			footer: true,
			insights: [],
		};
	},
	getters: {
		isLoading: state => state.Loading,
		isOpenAside: state => state.OpenAside,
		isScrolled: state => state.Scrolled,
		isNoScroll: state => state.NoScroll,
		isHeader: state => state.header,
		isFooter: state => state.footer,
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
		setHeader(state, payload) {
			state.header = payload;
		},
		setFooter(state, payload) {
			state.footer = payload;
		},
	},
	actions: {
		async getInsightList(context, payload) {
			try {
				const res = await fetchLists(payload.num);
				console.log(payload.num, res);
			} catch (e) {
				console.log(e);
			}
		},
	},
});

export default store;
