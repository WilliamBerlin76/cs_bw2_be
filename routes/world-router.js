const router = require('express').Router()

const WorldInfo = require('../models/world-model');

router.post('/rooms', (req, res) => {
    const roomInfo = req.body;

    if(!roomInfo.room_id){
        res.status(400).json({ message: 'must include room id'})
    }
    WorldInfo.addRoom(roomInfo)
        .then(room => res.status(201).json(room))
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'the server failed to add the room'})
        })
})

module.exports = router;