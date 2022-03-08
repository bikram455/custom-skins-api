import { connectClient } from '../connection.js';

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