
exports.up = function(knex) {
    return knex.schema.createTable('player', tbl => {
        tbl.increments();

        tbl.string('name', 128);
        tbl.float('cooldown');
        tbl.integer('encumbrance');
        tbl.integer('strength');
        tbl.integer('speed');
        tbl.integer('gold');
        tbl.string('bodywear');
        tbl.string('footwear')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('player');
};
