import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import DialogPlugin from 'dialog-plugin-vue';

createApp(App).use(DialogPlugin).mount('#app');
