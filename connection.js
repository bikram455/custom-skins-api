// import { Client } from 'pg';
import pg from 'pg';
import dotenv from 'dotenv';

export const connectClient = async()=> {
    try {
        dotenv.config();
    // const { Client } = pg;

    // const client = new Client({
    //     user: process.env.USERNAME,
    //     host: process.env.HOST,
    //     database: process.env.DATABASE,
    //     password: process.env.PASSWORD,
    //     port: process.env.PORT,
    //     ssl: true,
    //     dialect: "postgres",
    //   });
    // client.connect()


    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    const client = await pool.connect();
    const res = await client.query('select * from users');
    console.log(res.rows);
    // return client;
    } catch(err) {
        console.error('The error is: ', err);
    }
}
