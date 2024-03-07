import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

// axios.default.withCredentials = true;
// const options = {
// 	withCredentials: true,
// };

function fetchLists(num) {
	return instance.get(`https://aluvy.github.io/vue3-test/data/insight/list${num}.json`);
}

export { fetchLists };
