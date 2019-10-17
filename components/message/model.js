const moongose = require('mongoose')
const Schema = moongose.Schema

const mySchema = new Schema({
    user: {
        type: String,
        required: true
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