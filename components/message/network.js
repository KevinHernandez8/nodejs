const express = require('express')
const response = require('../../network/response')
const router = express.Router()
const controller = require('./controller')

// Con el router de express se pueden separar los metodos en las rutas
// router.get('/', function (req, res) {
//     // Información recibida desde el cliente (request)
//     console.log(req.body)
//     console.log(req.query)
//     console.log(req.headers)
//     let mensaje = req.body.texto

//     // Respuesta enviada por el servidor (response)
//     res.header({
//         'custom-header': 'Mi custom header'
//     })
//     res.send('Hola desde GET - Mensaje = ' + mensaje)
//     // Envíar una respuesta vacía (sin body, pero con status code)
//     //res.status(201).send()
//     // Objetos completos
//     res.status(201).send({
//         error: '',
//         body: 'Creado correctamente'
//     })
// })

// router.get('/', function (req, res) {
//     response.success(req, res, 'Response genérico')
// })

router.get('/', function (req, res) {
    const filterMessages = req.query.chat || null
    controller.getMessages(filterMessages)
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})

router.post('/', function (req, res) {
    controller.addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
    })
    .catch(e => {
        response.error(req, res, 'Información inválida', 400, 'Error en el controlador')
    })
})

router.patch('/:id', function (req, res) {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
    })
})

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
    .then((data) => {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
    })
})

module.exports = router