import User from '../models/User'
import * as bcrypt from 'bcrypt'

/**Checks if Email exists */
async function checkEmailExists(email){
    var result = await User.findOne({'email': email}).exec();

    if(result === null){
        return false
    } else {
        return true
    }   
}

/**Checks if user password matches password in the database.*/
async function checkPassword(email: string, password: string): Promise<Boolean>{
    var profile: any = await User.findOne({'email': email}).exec();
    var result = bcrypt.compare(password, profile.password)

    if(result){
        return true
    } else {
        return false
    }
}
/**Sets User's last login date.*/
async function setlastLogin(email: string): Promise<void> {
    var profile: any = await User.findOne({'email': email}).exec();
    var currentDate = new Date()

    await User.updateOne({ _id: profile._id }, { last_login: currentDate })
}

/**Grabs user profile from the database.*/
async function getProfile(email: string):Promise<any> {
    var profile: any = await User.findOne({'email': email}).exec();

    if(profile === null){
        return new Error('No result found')
    } else {
        return profile
    }  
}

export { checkPassword, checkEmailExists, getProfile, setlastLogin }