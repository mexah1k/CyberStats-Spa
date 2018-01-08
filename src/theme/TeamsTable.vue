<template>
  <div class="team-content">
		<table class="table table-hover">
			<thead>
				<tr>
					<th scope="col">Place</th>
					<th scope="col">Name</th>
					<th scope="col">Points</th>
					<th scope="col">Revenue</th>					
				</tr>
			</thead>
			<tbody v-for="team in teams" v-bind:key="team.id">
				<tr class="table-active">
					<td>{{ team.id }}</td>
					<td>{{ team.logoUrl }} {{ team.name }}</td>
					<td>{{ team.points }}</td>
					<td>{{ team.revenue }}$</td>
				</tr>
			</tbody>
		</table> 
	</div>
</template>

<script>
	import webApiService from '../app.web-api.service.js'

	export default {
		data () {
			return {
				id: this.$route.params.id,
				teams: []
			}
		},
		methods: {
			loadTeams () {
				webApiService.getTeams().then(data => {
					this.teams = data
				})
			}
		},
		created () {
			this.loadTeams()
		}
	}
</script>

<<style lang="less" scoped>

.team-content {
	text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
    margin: 10% 5% 5% 5%;
}

</style>
