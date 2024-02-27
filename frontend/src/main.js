import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

import SlotComp from '@/components/CardSlots.vue'

// createApp(App).use(store).use(router).mount('#app')

// Vue.component('slot-comp', SlotComp)


const app = createApp(App);

// Registering components
app.component('slot-comp', SlotComp);

// Using plugins
app.use(store);
app.use(router);

// Mounting the app
app.mount('#app');

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.css'
