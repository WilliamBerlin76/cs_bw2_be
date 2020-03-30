const router = require('express').Router()

const WorldInfo = require('../models/world-model');

router.post('/rooms', async (req, res) => {
    const roomInfo = req.body;

    if(!roomInfo.room_id){
        res.status(400).json({ message: 'must include room id'})
    }

    if(roomInfo.shop === 1){
        await WorldInfo.addShop({room_id: roomInfo.room_id})
    }
    if(roomInfo.shrine === 1){
        await WorldInfo.addShrine({room_id: roomInfo.room_id})
    }
    if(roomInfo.name_changer === 1){
        await WorldInfo.addNameChanger({room_id: roomInfo.room_id})
    }
    WorldInfo.addRoom(roomInfo)
        .then(room => res.status(201).json(room))
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'the server failed to add the room'})
        })
})

router.get('/rooms', (req, res) => {
    WorldInfo.getRooms()
        .then(rooms => {
            res.status(200).json(rooms)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'The server failed to get the rooms'})
        })
})

router.get('/shops', (req, res) => {
    WorldInfo.getShops()
        .then(shops => {
            res.status(200).json(shops)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'The server failed to get the shops'})
        })
})

router.get('/shrines', (req, res) => {
    WorldInfo.getShrines()
        .then(shrines => {
            res.status(200).json(shrines)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'The server failed to get the shrines'})
        })
})

router.get('/namechanger', (req, res) => {
    WorldInfo.getNameChanger()
        .then(namechanger => {
            res.status(200).json(namechanger)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'The server failed to get the namechanger'})
        })
})

module.exports = router;