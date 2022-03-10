import { Router } from 'express';
import { getUsers, userLogin } from './controllers/user-controller.js';

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

routes.post('/login', async(req, res, next) => {
    try {
        const users = await userLogin(req.body);
        res.json({
            message: 'Successfully logged in.',
            username: req.body.username
        });
    } catch(err) {
        res.status(500);
        res.json({
            message: 'Error while logging in.',
            error: err
        });
    }
});

export default routes;