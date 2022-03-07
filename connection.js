// import { Client } from 'pg';
import pg from 'pg';
import dotenv from 'dotenv';

export const connectClient = async()=> {
    dotenv.config();
    const { Client } = pg;
    
    let user= process.env.USERNAME;
    let password= process.env.PASSWORD;
    let port= process.env.DBPORT;
    let host= process.env.HOST;
    let dbname= process.env.DATABASE;

    // const connectionString=`postgres://${user}:${password}@${host}:${port}/${dbname}?ssl=true`;
    // const client=new pg.Client(connectionString);
    // // console.log('The connection string is: ', connectionString);
    const client = new Client({
        user: process.env.USERNAME,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.PORT,
        ssl: true,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
            require: true,
            rejectUnauthorized: false
            }
        },
      });
    client.connect()

    const res = await client.query('select * from users');
    console.log(res.rows);
    // return client;
}
