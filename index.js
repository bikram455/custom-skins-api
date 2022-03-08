import dotenv from 'dotenv';
import express from 'express';
import { connectClient } from './connection.js';

let app = express();
dotenv.config();
console.log('the env is: ', process.env.USERNAME, process.env.PASSWORD, process.env.DATABASE);
app.get('/' , (req , res ) => {
    res.json({
        message:'Welcome to the api',
        instruction:'/api to enter api'
    });
});

app.listen(process.env.PORT || 300, () => {
    console.log('Listening to port: ', process.env.PORT);
    connectClient();
});