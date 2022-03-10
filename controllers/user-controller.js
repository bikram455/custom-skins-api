import { connectClient } from '../connection.js';
import { userLoginService } from '../services/user-service.js';

export const getUsers = async ()=> {
    try {
        const pool = connectClient();
        const client = await pool.connect();
        const res = await client.query('select * from users');
        client.release();
        return res.rows;
    } catch(err) {
        console.error('Error while fetching users: ', err);
    }
}

export const userLogin = async (data)=> {
    const users = await userLoginService(data);
    if(users.length === 0) {
        return Promise.reject("Username or password incorrect.");
    } else {
        return Promise.resolve (users[0]);
    }
}