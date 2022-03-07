import express from 'express';
import { connectClient } from './connection.js';

let app = express();

app.get('/' , (req , res ) => {
    res.json({
        message:'Welcome to the api',
        instruction:'/api to enter api'
    });
});

app.listen(process.env.PORT || 300, () => {
    console.log('Listening to port: 300');
    connectClient();
});