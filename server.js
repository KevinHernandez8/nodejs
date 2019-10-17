const express = require('express')
const bodyParser = require('body-parser')
const router = require('./network/routes')

var app = express()
app.use(bodyParser.json())
router(app)

// Express "auto-genera" las rutas para acceder a todos los archivos
// dentro de la carpeta especificada
app.use('/app', express.static('public'))

app.listen(3000)
console.log('La aplicación está escuchando en http://localhost:3000')