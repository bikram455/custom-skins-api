import dotenv from 'dotenv';
import express from 'express';
import { connectClient } from './connection.js';

let app = express();
dotenv.config();
console.log('the port is: ', process.env.PORT);
app.get('/' , (req , res ) => {
    res.json({
        message:'Welcome to the api',
        instruction:'/api to enter api'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Listening to port: 300');
    connectClient();
});