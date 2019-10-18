const express = require('express')
const response = require('../../network/response')
const router = express.Router()
const controller = require('./controller')

router.post('/', function (req, res) {
    controller.addUser(req.body.name)
    .then(data => {
        response.success(req, res, data, 201)
    })
    .catch(e => {
        response.error(req, res, 'Internal error', 500, e)
    })
})

router.get('/', function (req, res) {
    //const filterName = req.query.name || null
    controller.getUsers()
    .then((userList) => {
        response.success(req, res, userList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})

router.patch('/:id', function (req, res) {
    controller.updateUser(req.params.id, req.body.name)
    .then((data) => {
        response.success(req, res, data, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
    })
})

router.delete('/:id', function (req, res) {
    controller.deleteUser(req.params.id)
    .then((data) => {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
    })
})

module.exports = router