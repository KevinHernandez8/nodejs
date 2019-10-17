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

module.exports = router