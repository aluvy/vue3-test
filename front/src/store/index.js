import { createStore } from 'vuex';
import { fetchInsightsLists, fetchAllInsightsLists, fetchWorksLists } from '@/api/list.js';

const store = createStore({
	state() {
		return {
			// scrollOffset: { x: 0, y: 0 },

			Loading: true,
			OpenAside: false,
			Scrolled: false,
			NoScroll: false,
			header: true,
			footer: true,

			insights: [],
			works: [],
		};
	},
	getters: {
		// isScrollOffset: state => state.scrollOffset,
		isLoading: state => state.Loading,
		isOpenAside: state => state.OpenAside,
		isScrolled: state => state.Scrolled,
		isNoScroll: state => state.NoScroll,
		isHeader: state => state.header,
		isFooter: state => state.footer,

		getInsights: state => state.insights,
		getWorks: state => state.works,
	},
	mutations: {
		// setScrollOffset(state, payload) {
		// 	state.scrollOffset = payload;
		// },
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

		SET_INSIGHT_LIST(state, payload) {
			state.insights = state.insights.concat(payload);
		},
		SET_ALL_INSIGHT_LIST(state, payload) {
			state.insights = payload;
		},
		SET_WORK_LIST(state, payload) {
			state.works = payload;
		},
	},
	actions: {
		async FETCH_GET_INSIGHT_LIST(context, payload) {
			try {
				const res = await fetchInsightsLists(payload.num);
				context.commit('SET_INSIGHT_LIST', res.data);
			} catch (e) {
				console.log('error', e);
			}
		},
		async FETCH_GET_ALL_INSIGHT_LIST(context) {
			try {
				const res = await fetchAllInsightsLists();
				context.commit('SET_ALL_INSIGHT_LIST', res.data);
			} catch (e) {
				console.log('error', e);
			}
		},
		async FETCH_GET_WORK_LIST(context, payload) {
			try {
				const res = await fetchWorksLists(payload.num);
				context.commit('SET_WORK_LIST', res.data);
			} catch (e) {
				console.log('error', e);
			}
		},
	},
});

export default store;
