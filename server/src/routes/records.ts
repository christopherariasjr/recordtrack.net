import * as express from 'express';
const router = express.Router();
import Record from '../models/Record'

/**Adds new record to DB. */
router.post('/', (req, res) => {
    var newRecord = req.data;
    
    var payload = {
        "album": newRecord.album,
        "artist": newRecord.artist,
        "year":  newRecord.year,
        "genre": newRecord.genre,
        "tracks": newRecord.tracks
    }

    try {
        //sets and saves new record
        var record = new Record(payload)
        record.save((err) => {
            if (err) {
                req.sendStatus(500);
                return
            }
        })

        req.sendStatus(200);
        return
    } catch(err) {
        req.sendStatus(500);
        return
    }
})

/**Adds record to users list. */
router.post('/:user_id/records/:track_id', (req, res) => {
    var userID = req.params.user_id;
    var trackID = req.params.track_id;

    res.sendStatus(200)
    return
})



export default router