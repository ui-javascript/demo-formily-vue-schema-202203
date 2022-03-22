import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import DemoApp from '../demo/demo/demoApp.vue'

createApp(DemoApp)
    .use(Antd)
    .mount('#app')
