import * as express from 'express';

const Router = express.Router()

/***PATHS***/
import users from './users'
import pets from './pets'

Router.use('/users', users);
Router.use('/pets', pets);

export default Router