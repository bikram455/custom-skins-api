// import { Client } from 'pg';
import pg from 'pg';
import dotenv from 'dotenv';

export const connectClient = ()=> {
    dotenv.config();
    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    // const client = await pool.connect();
    // const res = await client.query('select * from users');
    // console.log(res.rows);
    return pool;
}
