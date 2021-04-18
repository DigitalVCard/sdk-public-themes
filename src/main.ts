import 'virtual:windi.css';

import { createApp } from 'vue';
import App from './App.vue';
import {} from 'vue-router';
//@ts-ignore
import { plugin } from '@redware/gcard-sdk';
import '@redware/gcard-sdk/styles/assets/styles.css';
import '@redware/gcard-sdk/dist/style.css';
import { themes } from './themes';
// console.log(themes);

const app = createApp(App);

app.use(plugin, { themes: Object.values(themes), theme: 'izi-basic' });
app.mount('#app');
