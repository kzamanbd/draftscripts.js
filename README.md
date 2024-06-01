# Dialog Plugin Vue

A customizable Vue.js dialog component library with support for success, error, warning, and confirmation dialogs.

## Features

- Customizable dialog types: success, error, warning, and confirm.
- Supports both options API and composition API.
- Promise-based API for handling user responses.
- Customizable CSS class names for styling flexibility.
- Built with Vite for fast and modern development.

## Installation

Install the plugin using npm:

```sh
npm install dialog-plugin-vue
```

Or using yarn:

```sh
yarn add dialog-plugin-vue
```

## Usage

### Register the Plugin

In your main application file (e.g., main.js or main.ts), register the plugin:

```js
import { createApp } from 'vue';
import App from './App.vue';
import DialogPlugin from 'dialog-plugin-vue';
import 'dialog-plugin-vue/dist/dialog-plugin-vue.css';

const app = createApp(App);

const options = {
  // Custom options here
};

app.use(DialogPlugin, options);

app.mount('#app');

```

### Options API Example

To open a dialog using the Options API:

```js
export default {
  methods: {
    showDialog() {
      this.$openDialog('Message', { type: 'success' });
    },
    showConfirmDialog() {
      this.$openDialog('Message', { type: 'confirm' }).then((action) => {
        if (action) {
          console.log('Confirmed');
        }
      }).catch(() => {
        console.log('Rejected');
      });
    }
  }
};

```

### Composition API Example

To open a dialog using the Composition API:

```js
import { inject } from 'vue';

export default {
  setup() {
    const openDialog = inject('openDialog');

    const showDialog = () => {
      openDialog('Message', { type: 'success' });
    };

    const showConfirmDialog = () => {
      openDialog('Message', { type: 'confirm' }).then((action) => {
        if (action) {
          console.log('Confirmed');
        }
      }).catch(() => {
        console.log('Rejected');
      });
    };

    return {
      showDialog,
      showConfirmDialog
    };
  }
};
    
```

## New Version released

```sh
git tag v1.0.5
git push origin v1.0.5
```
