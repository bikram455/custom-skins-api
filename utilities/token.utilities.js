import jwt from 'jsonwebtoken';

export const getToken = (username) => {
    const token = jwt.sign({username}, 'app_secret_key', {expiresIn: '2m'});
    const iat = jwt.decode(token)['iat'];
    setTimeout(() => {
        console.log('Time difference is: ', Math.abs(new Date() - new Date( parseInt(iat) * 1000 ))); 
    }, 1000);
}