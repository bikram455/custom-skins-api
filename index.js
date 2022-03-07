import express from 'express';
import { connectClient } from './connection.js';

let app = express();

app.listen(300, () => {
    console.log('Listening to port: 300');
    connectClient();
});