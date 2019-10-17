const Model = require('./model')

function addUser(user) {
    const myUser = new Model(user)
    return myUser.save()
}

module.exports = {
    add: addUser,
    list: getUsers,
    update: updateUser,
    remove: deleteUser
}