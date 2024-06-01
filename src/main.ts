import './assets/main.css';
import './assets/dialog-plugin-vue.css';

import { createApp } from 'vue';
import App from './App.vue';

import DialogPlugin from './dialog';

createApp(App).use(DialogPlugin).mount('#app');
