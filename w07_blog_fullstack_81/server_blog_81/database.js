import pkg from 'pg';
const { Pool } = pkg;

let pool;

if (process.env.DATABASE === 'SUPABASE') {
    pool = new Pool({
        host: process.env.SUPABASE_HOST,
        port: '5432',
        user: 'postgres',
        password: process.env.SUPABASE_PASSWORD,
        database: 'postgres'
    });
} else {
    pool = new Pool({
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: '0000',
        database: 'wp1_demo_81'
    });
    console.log('local');
}
//console.log('connecting to database', pool.options);
//const testDB = async () => {
//    try {
//        const results = await pool.query(`select * from card_81`);
//        console.log('json data', JSON.stringify(results.rows));
//    } catch (error) {
//        console.log(error)
//    }
//};
//testDB();
export default pool;
