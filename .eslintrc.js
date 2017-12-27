module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: "module"
  },
  extends: "standard",
  plugins: [
  	"html"
  ],
  rules:{
	"indent": [2, "tab"],
	"no-tabs": 0
  }
}
