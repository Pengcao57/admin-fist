import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';
import router from './router';
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './styles/index.less';
const app = createApp(App);
app.use(router);
app.use(pinia);
// app.use(ElementPlus);
app.mount('#app');
