<template>
  	<div>
		<app-header></app-header>
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-8">
					<router-view></router-view>
				</div>
			</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppHeader from './Header.vue'
	import AppFooter from './Footer.vue'

	export default {
		components: {
			'app-header': AppHeader,
			'app-footer': AppFooter
		}
	}
</script>

<style lang="less">
@import '~bootstrap/dist/css/bootstrap.min.css';

@base: #1B1C21;
@mainTable: #222C3B;

html {
	height: 100%;
}

body {
	background: @base;
	background-size: cover;
	background-position: center;
	font-family: Arial;
}

h1 {
	font-weight: 700;
	font-size: 3em;
}
</style>
