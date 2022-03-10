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

export const userRegisterService = async (data)=> {
    try {
        const pool = connectClient();
        const client = await pool.connect();
        if(await userExists(client, data.username)) {
            return Promise.reject(`A user with username ${data.username} already exists.`);
        }
        const res = await client.query('insert into users (user_name, password) values($1, $2)', [data.username, data.password]);
        client.release();
        return Promise.resolve(`New user ${data.username} added successfully.`);
    } catch(err) {
        return Promise.reject(err);
    }
}

const userExists = async (client, user) => {
    const res = await client.query('select * from users where upper(user_name)=upper($1)', [user]);
    return res.rowCount !== 0;
}