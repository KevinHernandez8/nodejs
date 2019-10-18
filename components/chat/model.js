const moongose = require('mongoose')
const Schema = moongose.Schema

const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'users'
    }]
})

const model = moongose.model('chats', mySchema)
module.exports = model