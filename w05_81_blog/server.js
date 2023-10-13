import express from 'express';
import logger from 'morgan';
import path from 'path';

const app = express();
import dotnev from 'dotenv';
dotnev.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', (req, res, next) => {
    res.render('index', { tittle: 'Express' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    if (process.env.DATABASE === 'SUPABASE') {
        console.log('Connecting SUPABASE postgreSQL');
    } else {
        console.log(`connecting local PostgreSQL`);
    }
    console.log(`Connecting on port:${port}`);
});