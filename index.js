import dotenv from 'dotenv';
import express from 'express';
import routes from './routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

let app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

app.listen(process.env.PORT || 300, () => {
    console.log('Listening to port: ', process.env.PORT || 300);
});

app.use('/' , routes);