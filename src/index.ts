import type { App, Plugin } from 'vue';
import DialogPlugin from './dialog';

export default {
    install(app: App, options?: any) {
        app.use(DialogPlugin, options);
    }
} as Plugin;
