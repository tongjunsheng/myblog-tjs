import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vue from 'vue';
import axios from 'axios'
createApp(App).use(store).use(router).mount('#app');

window.addEventListener('popstate',function (e) {
  router.isBack = true
},false)