<template>
  	<div class="row">
        <teams-table></teams-table>
        <team-players-table></team-players-table>
	</div>
</template>

<script>
import TeamsTable from './TeamsTable.vue'
import TeamPlayers from './TeamPlayersTable.vue'

export default {
	components: {
		'teams-table': TeamsTable,
		'team-players-table': TeamPlayers
	}
}
</script>