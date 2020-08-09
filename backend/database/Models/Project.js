const { Model } = require('objection');
const knex = require('../Knex');

Model.knex(knex);

class Project extends Model {
  static get tableName() {
    return 'projects';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    const Task = require('./Task');
    const WorkSession = require('./WorkSession');
    const User = require('./User');
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'projects.id',
          through: {
            from: 'users_projects.project_id',
            to: 'users_projects.user_id',
          },
          to: 'users.id',
        },
      },
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: Task,
        join: {
          from: 'projects.id',
          to: 'tasks.project_id',
        },
      },
      workSessions: {
        relation: Model.HasManyRelation,
        modelClass: WorkSession,
        join: {
          from: 'projects.id',
          to: 'work_sessions.project_id',
        },
      },
    };
  }
}

module.exports = Project;
