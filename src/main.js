import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './router/permission-route'
import { collectRoutes } from '@/utils/permission'

collectRoutes()
createApp(App).use(router).use(store).use(Antd).mount('#app')