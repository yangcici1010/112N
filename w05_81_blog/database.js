const { Pool } = require('pg');
let pool;

pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '0000',
    database: 'wp1_demo_81',
});

const testDB = async () => {
    try {
        const results = await pool.query(`select *from card_81`);
        console.log('json data', results.rows);

    } catch (error) {
        console.log(error)
    }
}
testDB()
//console.log('connect database', pool.options)

module.exports = pool;