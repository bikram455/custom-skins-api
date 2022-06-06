import { connectClient } from '../connection.js';

export const fetchEmployeesService = async ()=> {
    try {
        // const pool = connectClient();
        // const client = await pool.connect();
        const client = await connectClient();  //Using single instance of connection
        const res = await client.query('select * from employees');
        return res.rows;
    } catch(err) {
        return Promise.reject('Error while logging in: ', err);
    }
}