import * as express from 'express';
const Router = express.Router();
import User from '../models/User'
import * as bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'
import { checkPassword, checkEmailExists, getProfile } from '../services/profile'
import { createToken, authenticateToken } from '../services/token'

dotenv.config()

var salt = parseInt(process.env.SALT)

//Login to account
Router.post('/login', async (req, res) => {
    let email: string       = req.body.email;
    let password: string    =  req.body.password;

    let emailResult = await checkEmailExists(email);
    let pwdResult = await checkPassword(email, password)

    if(!emailResult) {
        res.status(400).send('Email does not exist');
    }
    if(!pwdResult) {
        res.status(400).send('Incorrect Password');
    }

    try {
        var userProfile: any = await getProfile(email);
        var token = createToken(userProfile._id, email)
    } catch(err){
        res.sendStatus(500)
        return
    }
    
    res.send(token)
})

//Creates new user
Router.post('/', async (req, res) => {
    var email: string       = req.body.email;
    var password: string    = req.body.password;
    var firstName: string   = req.body.first_name;
    var lastName: string    = req.body.last_name;
    var createdDate: Date   = new Date()

    var checkResult = await checkEmailExists(email)

    if(checkResult === true){
        res.send('Email already exists.')
        return
    }

    try {
        var hashedPwd: string = await bcrypt.hash(password, salt) 
    } catch(err){
        console.log(err);
        res.sendStatus(500);
        return
    }

    var payload = {
        email: email,
        password: hashedPwd,
        first_name: firstName,
        last_name: lastName,
        joined: createdDate
    }

    try{
        const newUser = new User(payload);

        newUser.save((err) => {
            if(err) console.log(err)
        });

        res.sendStatus(200);
        return
    } catch(err) {
        res.sendStatus(500)
        return
    }
});

//edits account info
Router.patch('/', authenticateToken, (req, res) => {
    res.send('Patch User');
});

Router.get('/profile', authenticateToken, async (req, res) => {

})


var user = Router
export default user