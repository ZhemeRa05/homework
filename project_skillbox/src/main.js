import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line no-unused-vars
import { message, messageFortune } from './data';
// eslint-disable-next-line no-unused-vars
import { messageText } from './index-function';

createApp(App).use(store).use(router).mount('#app');

messageText(message);
messageText(messageFortune);
