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

			insightsStatus: true,
			insights: [],
			worksStatus: true,
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

		getInsightsStatus: state => state.insightsStatus,
		getInsights: state => state.insights,
		getWorksStatus: state => state.worksStatus,
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

		setInsights(state, payload) {
			state.insights = payload;
		},
		setInsightsStatus(state, payload) {
			state.insightsStatus = payload;
		},
		setWorks(state, payload) {
			state.works = payload;
		},
		setWorkstatus(state, payload) {
			state.worksStatus = payload;
		},
	},
	actions: {
		async dispatchInsightList(context, payload) {
			console.log(payload);
			if (!context.state.insightsStatus) return;
			try {
				const res = await fetchInsightsLists(payload.num);
				context.commit('setInsights', res.data);
				console.log(payload.num, res);
			} catch (e) {
				console.log('error', e);
				context.commit('setInsightsStatus', false);
			}
		},
		async dispatchWorkList(context, payload) {
			console.log(payload);
			if (!context.state.insightsStatus) return;
			try {
				const res = await fetchWorksLists(payload.num);
				context.commit('setInsights', res.data);
				console.log(payload.num, res);
			} catch (e) {
				console.log('error', e);
				context.commit('setInsightsStatus', false);
			}
		},
	},
});

export default store;
