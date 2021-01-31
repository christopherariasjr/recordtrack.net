import * as express from 'express';

const router = express.Router()

/***PATHS***/
import * as users from './users'
import * as records from './records'

router.use('/users', users);
router.use('/records', records);

export default router