import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import DialogPlugin from 'dialog-plugin-vue';
import 'dialog-plugin-vue/dist/dialog-plugin-vue.css';

createApp(App).use(DialogPlugin).mount('#app');
