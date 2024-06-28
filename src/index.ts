import type { App, Plugin } from 'vue';
import Dialog from './dialog';

import AlertDialog from './components/AlertDialog';

const DialogPlugin: Plugin = {
    install(app: App, options?: any) {
        // Register components
        app.component('AlertDialog', AlertDialog);

        app.use(Dialog, options);
    }
};

export { DialogPlugin, AlertDialog };
