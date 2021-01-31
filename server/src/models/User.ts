import { Schema } from 'mongoose';
import db from '../db'

var UserSchema: Schema = new db.Schema({
    'email': {type: String, require: true},
    'password':{type: String, require: true},
    'first_name':{type: String, require: true},
    'last_name':{type: String, require: true},
    'profile_picture_id':String,
    'joined':{type: Date, require: true},
    'last_login': Date,
    'records':[
        {
            'record_id': String,
            'purchase_price': Number
        }
    ],
    'role': {
        type: String,
        default: 'basic',
        enum: ["basic", "admin", "developer"]
    }
});

export default db.model("User", UserSchema)