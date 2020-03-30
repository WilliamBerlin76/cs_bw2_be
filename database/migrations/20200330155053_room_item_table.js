
exports.up = function(knex) {
    return knex.schema.createTable('room_items', tbl => {
        tbl.increments();
        tbl.integer('room_id')
            .unsigned()
            .notNullable()
            .references('room_id')
            .inTable('rooms')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        
        tbl.integer('item_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('items')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        tbl.integer('count')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('room_items')
};
