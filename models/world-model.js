const db = require('../config/db-config');

module.exports = {
    addRoom,
    getRooms,
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

function getRooms(){
    return db('rooms')
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
