// O que é pra ser feito? O up criará uma tabela
exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

// Caso dê algum problema, o que é pra ser feito? O down excluirá a tabela
exports.down = function (knex) {
    return knex.schema.dropTable('ongs');
};
