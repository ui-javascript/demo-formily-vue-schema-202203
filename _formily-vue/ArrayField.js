import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './ArrayField.vue'

const app = createApp(App)
app.use(Antd)
app.mount('#app')
