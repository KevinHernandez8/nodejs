const config = {
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/chat',
    host: process.env.HOST || 'http://localhost',
    port: process.env.PORT || 3000,
    publicRoute: process.env.PUBLIC_ROUTE || 'app'
}

module.exports = config