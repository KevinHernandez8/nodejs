const store = require('./store')

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay usuario o mensaje')
            reject('Los datos son incorrectos')
            return false
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}

function updateMessage(id, message) {
    return new Promise((resolve, reject) => {
        if (!id || !message) {
            reject('Los datos son incorrectos')
            return false
        }
        const result = store.update(id, message)
        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Los datos son incorrectos')
            return false
        }
        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}