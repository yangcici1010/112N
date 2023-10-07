const { Pool } = require('pg');

let pool;




pool = new Pool({
    host: 'localhost',
    port: '5433',
    user: 'postgres',
    password: '0000',
    database: 'wp1_demo_81',
})

console.log('connect database', pool.options)

module.exports = pool;