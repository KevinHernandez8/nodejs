const express = require('express')
const app = express()
const server = require('http').Server(app)

const config = require('./config')

const bodyParser = require('body-parser')
const router = require('./network/routes')
const db = require('./db')
const socket = require('./socket')
const cors = require('cors')

db(config.dbUrl)
router(app)
socket.connect(server)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// Express "auto-genera" las rutas para acceder a todos los archivos
// dentro de la carpeta especificada
app.use(`/${config.publicRoute}`, express.static('public'))

server.listen(config.port, () => {
    console.log(`La aplicación está escuchando en ${config.host}:${config.port}`)
})