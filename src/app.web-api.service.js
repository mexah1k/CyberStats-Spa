import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:52922'

const webApiService = {
	getTeams () {
		return new Promise((resolve) => {
			axios.get(`/api/teams`)
				.then(response => {
					console.log(response.data)
					resolve(response.data)
				})
				.catch(e => {
					console.log(e)
				})
		})
	}
}

export default webApiService
