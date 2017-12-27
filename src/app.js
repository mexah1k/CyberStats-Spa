import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
const app = new Vue({
	...AppLayout
})

export { app }
