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
					<td>{{ team.logo }} {{ team.name }}</td>
					<td>{{ team.points }}</td>
					<td>{{ team.revenue }}</td>
				</tr>
			</tbody>
		</table> 
	</div>
</template>

<script>
	export default {
		data () {
			return {
				teams: [
					{ id: 1, logo: 'Logo', name: 'Liquid', points: '2 500', revenue: '100 000$' },
					{ id: 2, logo: 'Logo', name: 'Liquid', points: '2 500', revenue: '100 000$' },
					{ id: 3, logo: 'Logo', name: 'Liquid', points: '2 500', revenue: '100 000$' },
					{ id: 4, logo: 'Logo', name: 'Liquid', points: '2 500', revenue: '100 000$' },
					{ id: 5, logo: 'Logo', name: 'Liquid', points: '2 500', revenue: '100 000$' },
					{ id: 6, logo: 'Logo', name: 'Liquid', points: '2 500', revenue: '100 000$' },
					{ id: 7, logo: 'Logo', name: 'Liquid', points: '2 500', revenue: '100 000$' },
					{ id: 8, logo: 'Logo', name: 'Liquid', points: '2 500', revenue: '100 000$' }
				]
			}
		}
	}
</script>
