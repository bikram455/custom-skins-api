import dotenv from 'dotenv';
import express from 'express';
import { connectClient } from './connection.js';

let app = express();
dotenv.config();
console.log('the port is: ', process.env.PORT, process.env.USERNAME);
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