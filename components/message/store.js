const db = require('mongoose')
const Model = require('./model')

// Conexión a la base de datos
// mongodb://localhost:27017/chat
db.Promise = global.Promise
db.connect('mongodb://localhost:27017/chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log('[db] Conectada con éxito')

function addMessage(message) {
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages(filterUser) {
    let filter = {}
    if (filterUser !== null) {
        filter = {
            user: filterUser
        }
    }
    const messages = await Model.find(filter)
    return messages
}

async function updateMessage(id, message) {
    const foundMessage = await Model.findById(id)
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

function deleteMessage(id) {
    return Model.findByIdAndDelete(id)
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    remove: deleteMessage
}