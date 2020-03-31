const db = require('../config/db-config');

module.exports = {
    addRoom,
    updateRoom,
    getRooms,
    getRoomById,
    addShop,
    addShrine,
    addNameChanger,
    getShops,
    getShrines,
    getNameChanger
}

function addRoom(info){
    return db('rooms')
            .insert(info)
}

function updateRoom(changes, id){
    return db('rooms')
            .where('room_id', '=', id)
            .update(changes)
}

function getRooms(){
    return db('rooms')
}

function getRoomById(id){
    return db('rooms')
            .where('room_id', '=', id)
            .first()
}
function addShop(info){
    return db('shops').insert(info)
}

function addShrine(info){
    return db('shrines').insert(info)
}

function addNameChanger(info){
    return db('namechanger').insert(info)
}

function getShops(){
    return db('shops')
}

function getShrines(){
    return db('shrines')
}

function getNameChanger(){
    return db('namechanger')
}
