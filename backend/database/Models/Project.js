const knex = require("../Knex");
const { Model } = require("objection");

Model.knex(knex);

class Project extends Model {
  static get tableName() {
    return "projects";
  }

  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    const Task = require("./Task");
    const WorkSession = require("./WorkSession");
    return {
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: Task,
        join: {
          from: "projects.id",
          to: "tasks.project_id",
        },
      },
      workSessions: {
        relation: Model.HasManyRelation,
        modelClass: WorkSession,
        join: {
          from: "projects.id",
          to: "work_sessions.project_id",
        },
      },
    };
  }
}

module.exports = Project;
