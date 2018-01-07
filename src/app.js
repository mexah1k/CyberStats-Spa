import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

Vue.use(BootstrapVue)
const app = new Vue({
	router,
	...AppLayout
})

export { app, router }
