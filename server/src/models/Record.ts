import { Schema } from 'mongoose';
import db from '../db'

var RecordSchema: Schema = new db.Schema({
    "album": String,
    "artist": String,
    "year":  Number,
    "genre": String,
    "current_price": Number,
    "tracks": [
        {
            "track": Number,
            "name": String,
            "length": String
        }
    ]  
});

export default db.model("Record", RecordSchema)