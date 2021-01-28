import User from '../models/User'
import * as bcrypt from 'bcrypt'

async function checkEmailExists(email){
    var result = await User.findOne({'email': email}).exec();

    if(result === null){
        return false
    } else {
        return true
    }   
}

//Checks if passwords is same.
async function checkPassword(email: string, password: string): Promise<Boolean>{
    var profile: any = await User.findOne({'email': email}).exec();
    var result = bcrypt.compare(password, profile.password)

    if(result){
        return true
    } else {
        return false
    }
}
//grabs user profile
async function getProfile(email: string):Promise<any> {
    var profile: any = await User.findOne({'email': email}).exec();

    if(profile === null){
        return new Error('No result found')
    } else {
        return profile
    }  
}

export { checkPassword, checkEmailExists, getProfile }