const moongose = require('mongoose')
const Schema = moongose.Schema

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const model = moongose.model('users', mySchema)
module.exports = model