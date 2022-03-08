import { Router } from 'express';
import { getUsers } from './controllers/user-controllers.js';

let routes = Router();

routes.get('/' , (req , res ) => {
    res.json({
        message:'Welcome to the api',
        instruction:'/api to enter api'
    });
});

routes.get('/users', async (req , res ) => {
    const users = await getUsers();
    res.json({
        message: 'This is api to fetch users',
        users
    });
});

routes.post('/login', async(req, res) => {
    console.log('This is user body: ', req.body);
});

export default routes;