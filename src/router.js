import Vue from 'vue'
import VueRouter from 'vue-router'
// import Teams from './theme/Teams.vue'
// import NotFoundPage from './theme/NotFound.vue'

const Content = () => System.import('./theme/Content.vue')
const NotFoundPage = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'is-active',
	scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
	routes: [
		{ path: '/', component: Content },
		{ path: '*', component: NotFoundPage }
	]
})

export default router
