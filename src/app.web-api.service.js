import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:56388'

let playerPageNumber = 1
let playerPageSize = 5

let teamPageNumber = 1
let teamPageSize = 8

const webApiService = {
	getTeams () {
		return new Promise((resolve) => {
			axios.get(`/api/teams?pageNumber=${teamPageNumber}&pageSize=${teamPageSize}`)
				.then(response => {
					resolve(response.data)
				})
				.catch(e => {
					console.log(e)
				})
		})
	},
	getTeamPlayers (teamId) {
		return new Promise((resolve) => {
			axios.get(`/api/teams/${teamId}/players?pageNumber=${playerPageNumber}&pageSize=${playerPageSize}`)
				.then(response => {
					resolve(response.data)
				})
		})
	}
}

export default webApiService
