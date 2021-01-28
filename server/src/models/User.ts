import { Schema } from 'mongoose';
import db from '../db'

var UserSchema: Schema = new db.Schema({
    'email': {type: String, require: true},
    'password':{type: String, require: true},
    'first_name':{type: String, require: true},
    'last_name':{type: String, require: true},
    'profile_picture':String,
    'joined':{type: Date, require: true},
    'pets':[
        {
            'pet_id': String,
        }
    ]
});

export default db.model("User", UserSchema)