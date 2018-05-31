import Vue from 'vue'
import VueRouter from 'vue-router'
// import Teams from './theme/Teams.vue'
// import NotFoundPage from './theme/NotFound.vue'

const TeamsTable = () => System.import('./theme/TeamsTable.vue')
const NotFoundPage = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'is-active',
	scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
	routes: [
		{ path: '/', component: TeamsTable },
		{ path: '*', component: NotFoundPage }
	]
})

export default router
