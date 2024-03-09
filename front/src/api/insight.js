import axios from 'axios';

const instance = axios.create({
	// baseURL: process.env.VUE_APP_API_URL,
	baseURL: 'https://aluvy.github.io/vue3-test/data',
});

function fetchInsightsLists(num) {
	return instance.get(`/insight/list${num}.json`);
}

function fetchWorksLists(num) {
	return instance.get(`/works/list${num}.json`);
}

export { fetchInsightsLists, fetchWorksLists };
