import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import DemoApp from './DemoApp.vue'

createApp(DemoApp)
    .use(Antd)
    .mount('#app')
