const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')
const router = require('./network/routes')
const db = require('./db')
const socket = require('./socket')

db('mongodb://localhost:27017/chat')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
router(app)
socket.connect(server)

// Express "auto-genera" las rutas para acceder a todos los archivos
// dentro de la carpeta especificada
app.use('/app', express.static('public'))

server.listen(3000, () => {
    console.log('La aplicación está escuchando en http://localhost:3000')
})