import * as express from 'express';
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('Get Pet');
})

Router.post('/', (req, res) => {
    res.send('Post Pet');
})

Router.patch('/', (req, res) => {
    res.send('Patch Pet');
})

var pet = Router
export default pet