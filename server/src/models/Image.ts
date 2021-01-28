import { Schema } from 'mongoose';
import db from '../db'

var ImageSchema: Schema = new db.Schema({
    "url": {type: String, required: true}
});

export default db.model("Images", ImageSchema)