const knex = require("../Knex");
const { Model } = require("objection");

Model.knex(knex);

class WorkSession extends Model {
  static get tableName() {
    return "work_sessions";
  }

  static get idColumn() {
    return "id";
  }
}

module.exports = WorkSession;
