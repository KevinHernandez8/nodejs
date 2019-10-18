const store = require('./store')

function addUser(name) {
    if (!name) {
        return Promise.reject('Invalid name')
    }

    const user = {
        name
    }

    return store.add(user)
}

function getUsers() {
    return store.list()
}

function updateUser(id, name) {
    if (!id || !name) {
        return Promise.reject('Invalid name or id')
    }

    return store.update(id, name)
}

function deleteUser(id) {
    if (!id) {
        return Promise.reject('Invalid id')
    }
    return store.remove(id)
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}