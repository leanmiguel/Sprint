const knex = require("../Knex");
const { Model } = require("objection");

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    const Project = require("./Project");
    return {
      projects: {
        relation: Model.ManyToManyRelation,
        modelClass: Project,
        join: {
          from: "users.id",
          through: {
            from: "users_projects.user_id",
            to: "users_projects.project_id",
          },
          to: "projects.id",
        },
      },
    };
  }
}

module.exports = User;
