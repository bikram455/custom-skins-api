// import { Client } from 'pg';
import pg from 'pg';
import dotenv from 'dotenv';

let client;

export const connectClient = async()=> {
    if(!client) {
        dotenv.config();
        const { Pool } = pg;
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });
        // return pool;
        client = await pool.connect();
    }
    return client;
}
