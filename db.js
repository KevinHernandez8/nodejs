const db = require('mongoose')

db.Promise = global.Promise

// Conexión a la base de datos
// mongodb://localhost:27017/chat
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('[db] Conectada con éxito')
}

module.exports = connect