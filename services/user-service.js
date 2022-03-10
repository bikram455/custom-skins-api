import { connectClient } from '../connection.js';

export const userLoginService = async (data)=> {
    try {
        const pool = connectClient();
        const client = await pool.connect();
        const res = await client.query('select * from users where user_name=$1 AND password=$2', [data.username, data.password]);
        client.release();
        return res.rows;
    } catch(err) {
        return Promise.reject('Error while logging in: ', err);
    }
}