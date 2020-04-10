// O que é pra ser feito? O up criará uma tabela
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

// Caso dê algum problema, o que é pra ser feito? O down excluirá a tabela
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
