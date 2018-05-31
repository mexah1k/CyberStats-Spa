<template>
<div class="row">
	<div class="col-lg-9">
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
				<tbody v-for="(team, index) in teams" v-bind:key="team.id">
					<tr v-on:click='loadTeamPlayers(team.id)'>
						<td>{{ index + 1 }}</td>
						<td><img class="team-logo" src="">
							{{ team.logoUrl }} {{ team.name }}
						</td>
						<td>{{ team.points }}</td>
						<td>{{ team.revenue }}$</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-lg-3">
		<div class="team-players-table">
			<div class="card text-white bg-dark mb-3" v-for="player in players" v-bind:key="player.id">
				<div class="card-header">"{{ player.nickName }}" {{ player.firstName }} {{ player.lastName }}</div>
				<div class="card-body">
					<div class="image-block">
						<img class="player-logo" src="https://cdn0.iconfinder.com/data/icons/modern-life/512/account-512.png">
					</div>
					<div class="card-text">
						<div class="player-info">
							Position: {{ player.position }}
						</div>
						<div class="player-info">
							Points: {{ player.points }}
						</div>
						<div class="player-info">
							Country: {{ player.country }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import webApiService from '../app.web-api.service.js'

	export default {
		data () {
			return {
				id: this.$route.params.id,
				index: 1,
				teams: [],
				players: []
			}
		},
		methods: {
			loadTeams () {
				webApiService.getTeams().then(data => {
					this.teams = data.result
				})
			},
			loadTeamPlayers (teamId) {
				webApiService.getTeamPlayers(teamId).then(data => {
					this.players = data.result
				})
			}
		},
		created () {
			this.loadTeams()
			this.loadTeamPlayers(1)
		}
	}
</script>

<<style lang="less" scoped>

.team-content {
	text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
	margin: 10% 5% 5% 5%;

	.table {
		background-color: #17181b;
		border-radius: 10px;
	}
}

.team-logo { 
	display: inline;
}

.team-players-table {
    margin-top: 25%; 
    margin-left: 20%;
}

.image-block {
    vertical-align: top;
    display: inline-block;
}

.card-text {
    font-size: 12px;
    margin-left: 10px;
    display: inline-block;
}

.player-logo {
    width: 50px;
    height: 60px;
}

</style>
