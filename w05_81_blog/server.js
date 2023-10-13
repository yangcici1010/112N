import express from 'express';
import logger from 'morgan';
import path from 'path';
import apiCardRouter_81 from './routes/api/apiCardRouter_81.js';
const app = express();
import dotnev from 'dotenv';
dotnev.config();

import db from './database.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', (req, res, next) => {
   res.render('index', { tittle: 'Express' });
});
app.use('/routes/api', apiCardRouter_81);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    if (process.env.DATABASE === 'SUPABASE') {
        console.log(`Connecting SUPABASE postgreSQL ${db.options.database}`);
    } else {
        console.log(`connecting local PostgreSQL${db.options.database}`);
    }
    console.log(`Connecting on port:${port}`);
});