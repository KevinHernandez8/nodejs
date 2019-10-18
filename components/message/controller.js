const store = require('./store')

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[messageController] No hay usuario o mensaje')
            reject('Los datos son incorrectos')
            return false
        }

        let fileUrl = ''
        if (file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename
        }

        const fullMessage = {
            chat: chat, 
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat))
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