const { Model } = require('objection');
const knex = require('../Knex');

Model.knex(knex);

class UserProject extends Model {
  static get tableName() {
    return 'users_projects';
  }

  static get idColumn() {
    return 'id';
  }
}

module.exports = UserProject;
