import dotenv from 'dotenv';
import express from 'express';
import routes from './routes.js';
import bodyParser from 'body-parser';

let app = express();
dotenv.config();
app.use(bodyParser.json());
// app.get('/' , (req , res ) => {
//     res.json({
//         message:'Welcome to the api',
//         instruction:'/api to enter api'
//     });
// });

app.listen(process.env.PORT || 300, () => {
    console.log('Listening to port: ', process.env.PORT || 300);
    // connectClient();
});

app.use('/' , routes);