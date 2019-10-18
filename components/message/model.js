const moongose = require('mongoose')
const Schema = moongose.Schema

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'chats'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'users'
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const model = moongose.model('messages', mySchema)
module.exports = model