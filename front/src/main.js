import { createApp } from 'vue';
import '@/assets/css/common.css';

import router from '@/routes';
import store from '@/store';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
