const Pool = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "projects",
    password: "202020",
    port: "5000",
})

module.exports = pool;