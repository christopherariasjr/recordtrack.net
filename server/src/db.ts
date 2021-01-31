import * as mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

var dbAddress: string;

if(process.env.NODE_ENV === "prod"){
    dbAddress = process.env.PROD_DB_ADDRESS
} else {
    dbAddress = process.env.DEV_DB_ADDRESS || "mongodb://localhost/recordtrack"
}

mongoose.connect(dbAddress, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose;

export default db