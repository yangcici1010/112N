import express from 'express';
var router = express.Router();

import db from '../../database.js';

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query(`select * from card_81`);
        console.log('json data', JSON.stringify(results.rows));
        res.json(results.rows);
    } catch (error) {
        console.log(error);
    }
});

export default router;