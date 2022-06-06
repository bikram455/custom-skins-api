import { Router } from 'express';
import { getUsers, userLogin, userSignup } from './controllers/user-controller.js';
import { fetchEmployees } from './controllers/employee-controller.js';

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

routes.post('/signup', async(req, res, next) => {
    try {
        const msg = await userSignup(req.body);
        res.json({
            message: msg
        });
    } catch(err) {
        res.status(500);
        res.json({
            message: 'Error while Signing up new user.',
            error: err
        });
    }
});

routes.get('/employees', async (req , res ) => {
    const employees = await fetchEmployees();
    res.json({
        message: 'This is api to fetch employees',
        employees
    });
});

export default routes;