const db = require('../config/db-config');

module.exports = {
    addRoom
}

function addRoom(info){
    return db('rooms')
            .insert(info)
}

