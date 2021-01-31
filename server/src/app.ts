import * as express from 'express'
import * as bodyParser from 'body-parser'
var app = express();
import * as dotenv from 'dotenv'
import * as cors from 'cors'
dotenv.config();

var port: number = parseInt(process.env.PORT) || 5000;

/***MIDDLEWARE***/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

/***ROUTER INIT***/
import router from './routes'
app.use('/api/v1', router);

app.listen(port, () => console.log(`Listening on localhost:${port}`));