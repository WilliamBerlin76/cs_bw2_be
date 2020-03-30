
exports.up = function(knex) {
    return knex.schema.createTable('rooms', tbl => {
        tbl.integer('room_id').notNullable(); // will act as room num and primary key

        tbl.string('name', 128);
        /////// exits ////////
        tbl.integer('n');
        tbl.integer('s');
        tbl.integer('e');
        tbl.integer('w');

        tbl.integer('x_coord');
        tbl.string('y_coord');

        /////// special room details ////////
        tbl.integer('name_changer');
        tbl.integer('shrine')
        tbl.integer('shop')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('rooms');
};
