import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config();
const secret = process.env.JWT_SECRET;
/**Creates Token for user authentication */
async function createToken(_id: string, email: string): Promise<any> {
    const payload: Object = {
        user_id: _id,
        email: email,
    }
    
    const token: any = await jwt.sign(payload, secret)
    return token
}
/**Checks user's auth Token */
async function checkToken(token: any) {
    try {
        var check: any = await jwt.verify(token, secret)
    } catch (err){
        return new Error('Invalid Token');
    }

    return check
}
/**Authenticates User's token */
async function authenticateToken(req, res, next){
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token

    jwt.verify(token, secret, (err: any, user: any) => {
        console.log(err)
        if (err) return res.sendStatus(403)//if token is not valid
        req.user = user
        next() // pass the execution off to whatever request the client intended
    })
}

export { createToken, authenticateToken }

