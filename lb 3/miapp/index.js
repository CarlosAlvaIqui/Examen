var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
	// body...
	res.send('hola mundo en express por carlos alvarez')
})
app.post('/', function (req, res) {
	// body...
	res.send('LLAMADA POST MISMA URL')
})
app.put('/', function (req, res) {
	// body...
	res.send('RECIBIMOS UN POST EN /USER')
})
app.delete('/', function (req, res) {
	// body...
	res.send('RECIBIMOS UN DELETE EN /USER')
})

app.use(function (err,req, res, next) {
	// body...
	console.error(err.stack)
	res.status(500).send("Algo salio mal")
})

app.listen(3000, function(){
	console.log('Aplicacion de ejemplo escuchando en el puerto 3000')
})