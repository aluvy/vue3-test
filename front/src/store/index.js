import { createStore } from 'vuex';
import { fetchInsightsLists, fetchWorksLists } from '@/api/list.js';

const store = createStore({
	state() {
		return {
			Loading: true,
			OpenAside: false,
			Scrolled: false,
			NoScroll: false,
			header: true,
			footer: true,

			// insightsStatus: true,
			insights: [],
			// worksStatus: true,
			works: [],
		};
	},
	getters: {
		isLoading: state => state.Loading,
		isOpenAside: state => state.OpenAside,
		isScrolled: state => state.Scrolled,
		isNoScroll: state => state.NoScroll,
		isHeader: state => state.header,
		isFooter: state => state.footer,

		// getInsightsStatus: state => state.insightsStatus,
		getInsights: state => state.insights,
		// getWorksStatus: state => state.worksStatus,
		getWorks: state => state.works,
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

		SET_INSIGHT_LIST(state, payload) {
			state.insights = payload;
		},
		// setInsightsStatus(state, payload) {
		// 	state.insightsStatus = payload;
		// },
		SET_WORK_LIST(state, payload) {
			state.works = payload;
		},
		// setWorkstatus(state, payload) {
		// 	state.worksStatus = payload;
		// },
	},
	actions: {
		// FETCH_GET_PRODUCT_LIST
		async FETCH_GET_INSIGHT_LIST(context, payload) {
			// async dispatchInsightList(context, payload) {
			// console.log(payload);
			// if (!context.state.insightsStatus) return;
			try {
				const res = await fetchInsightsLists(payload.num);
				context.commit('SET_INSIGHT_LIST', res.data);
				// console.log(payload.num, res);
			} catch (e) {
				console.log('error', e);
				// context.commit('setInsightsStatus', false);
			}
		},
		async FETCH_GET_WORK_LIST(context, payload) {
			// console.log(payload);
			// if (!context.state.worksStatus) return;
			try {
				const res = await fetchWorksLists(payload.num);
				context.commit('SET_WORK_LIST', res.data);
				// console.log(payload.num, res);
			} catch (e) {
				console.log('error', e);
				// context.commit('setWorkstatus', false);
			}
		},
	},
});

export default store;
