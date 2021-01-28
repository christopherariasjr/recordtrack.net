import { Schema } from 'mongoose';
import db from '../db'

var PetSchema: Schema = new db.Schema({
    'user_id':String,
    'name':String,
    'birdthdate':Date,
    'species':String,
    'breed':String
});

export default db.model("Pet", PetSchema)