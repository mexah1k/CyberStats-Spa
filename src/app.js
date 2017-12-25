import Vue from "vue";

const app = new Vue({
	data: {
		hello: "Test"
	},
	template: '<div id="app">{{hello}}</div>'
});

export { app };
