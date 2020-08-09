const { Model } = require('objection');
const knex = require('../Knex');

Model.knex(knex);

class Task extends Model {
  static get tableName() {
    return 'tasks';
  }

  static get idColumn() {
    return 'id';
  }
}

module.exports = Task;
