
exports.up = function(knex) {
    return knex.schema.createTable('shrines', tbl => {
        tbl.increments();
        tbl.integer('room_id')
            .unsigned()
            .notNullable()
            .references('room_id')
            .inTable('rooms')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shrines')
};
