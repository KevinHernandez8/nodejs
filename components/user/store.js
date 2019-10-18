const Model = require('./model')

function addUser(user) {
    const myUser = new Model(user)
    return myUser.save()
}

async function getUsers() {
    return Model.find()
}

async function updateUser(id, name) {
    const foundUser = await Model.findById(id)
    foundUser.name = name
    const newUser = await foundUser.save()
    return newUser
}

function deleteUser(id) {
    return Model.findByIdAndDelete(id)
}

module.exports = {
    add: addUser,
    list: getUsers,
    update: updateUser,
    remove: deleteUser
}