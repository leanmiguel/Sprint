const knex = require("../Knex");
const { Model } = require("objection");

Model.knex(knex);

class Task extends Model {
  static get tableName() {
    return "tasks";
  }

  static get idColumn() {
    return "id";
  }
}

module.exports = Task;
